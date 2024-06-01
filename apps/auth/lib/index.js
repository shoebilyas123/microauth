const grpc = require('@grpc/grpc-js');
const { ObjectId } = require('mongodb');
const { User } = require('../protos/auth_pb');

exports.internal = (err, callback) => {
  return callback({
    code: grpc.status.INTERNAL,
    err: err.toString(),
  });
};

exports.blogToDocument = function (user) {
  return {
    username: user.getAuthorId(),
    password: user.getPassword(),
    email: user.getEmail(),
    profilePic: user.getProfilePic(),
  };
};

exports.documentToBlog = function (doc, accessToken) {
  return new User()
    .setId(doc._id.toString())
    .setUsername(doc.username)
    .setEmail(doc.email)
    .setPassword('')
    .setProfilePic(doc.profilePic)
    .setAccessToken(accessToken);
};

exports.checkNotAcknowledged = function (res, callback) {
  if (!res.acknowledged) {
    return callback({
      code: grpc.status.INTERNAL,
      message: "Operation wasn't acknowledged",
    });
  }
};

exports.checkNotFound = function (res, callback) {
  if (!res && res?.matchedCount === 0) {
    callback({ code: grpc.status.NOT_FOUND, message: 'Document not found' });
  }
};

exports.checkOID = function (id, callback) {
  try {
    return new ObjectId(id);
  } catch (error) {
    return callback({
      code: grpc.status.INVALID_ARGUMENT,
      message: 'Invalid OID',
    });
  }
};
