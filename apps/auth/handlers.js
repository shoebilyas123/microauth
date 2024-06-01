const grpc = require('@grpc/grpc-js');
const { LoginResponse } = require('./protos/auth_pb');

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
  if (user.password !== '123123') {
    return callback({
      code: grpc.status.PERMISSION_DENIED,
      err: 'User not authorized',
    });
  }
}

exports.loginHandler = async (call, callback) => {
  await mongo_client.connect();
  const database = mongo_client.db('userdb');
  const Users = database.collection('user');

  checkLoginReq(call, callback);

  const res = await Users.findOne({ email: 'test@mock.com' });
  checkNotFound(res, callback);
  authenticateUser(res, call, callback);

  console.log({ res });
  await mongo_client.close();
  const authUser = new LoginResponse().setUser(
    documentToBlog(res, 'secret_token')
  );
  callback(null, authUser);
};
