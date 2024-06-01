const grpc = require('@grpc/grpc-js');

const { AuthServiceClient } = require('../protos/auth_grpc_pb');

const creds = grpc.ChannelCredentials.createInsecure();
const client = new AuthServiceClient('localhost:50052', creds);

process.on('SIGINT', () => {
  if (client) console.log('Shutting down RPC client');
  client.close();
});

module.exports = client;
