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

exports.loginHandler = async (call, callback) => {
  await mongo_client.connect();
  const database = mongo_client.db('userdb');
  const Users = database.collection('user');

  const payload = {
    email: call.request.getEmail(),
    password: call.request.getPassword(),
  };
  console.log({ payload });
  checkLoginReq(call, callback);

  const res = await Users.findOne({ ...payload });

  if (res == null || !res || (res && res?.matchedCount === 0)) {
    return callback({
      code: grpc.status.NOT_FOUND,
      message: 'Document not found',
    });
  }

  await mongo_client.close();
  const authUser = new LoginResponse().setUser(
    documentToBlog(res, 'secret_token')
  );
  callback(null, authUser);
};
