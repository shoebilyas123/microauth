const grpc = require('@grpc/grpc-js');
// const { getCollection } = require('./lib/mongodb');
const { checkNotFound, documentToBlog } = require('./lib');
const mongo_client = require('./lib/mongodb');

function checkLoginReq(call, callback) {
  if (!call.request.getEmail() || !call.request.getPassword()) {
    return callback({
      code: grpc.status.INVALID_ARGUMENT,
      err: 'Username and password is required',
    });
  }
}

function authenticateUser(user, call, callback) {
  if (user.password !== call.request.getPassword()) {
    return callback({
      code: grpc.status.PERMISSION_DENIED,
      err: 'User not authorized',
    });
  }
}

exports.loginHandler = async (call, callback) => {
  const database = mongo_client.db('userdb');
  const collection = database.collection('user');

  checkLoginReq(call, callback);

  (await collection).findOne({ email: call.request.getEmail() }).then((res) => {
    checkNotFound(res, callback);
    authenticateUser(res, call, callback);

    callback(null, documentToBlog(res, 'secret_token'));
  });
};
