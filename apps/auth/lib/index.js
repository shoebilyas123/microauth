const grpc = require('@grpc/grpc-js');
const { MongoClient, ObjectId } = require('mongodb');

exports.internal = (err, callback) => {
  return callback({
    code: grpc.status.INTERNAL,
    err: err.toString(),
  });
};

exports.checkNotAcknowledged = function (res, callback) {
  if (!res.acknowledged) {
    return callback({
      code: grpc.status.INTERNAL,
      message: "Operation wasn't acknowledged",
    });
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
