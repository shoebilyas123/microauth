const grpc = require('@grpc/grpc-js');
const fs = require('fs');

const handlers = require('./handlers');
const { AuthServiceService } = require('./protos/auth_grpc_pb');
const SERVER_ADDR = 'localhost:50052';

function cleanup(server) {
  console.log('Cleaning up...');
  if (server) {
    server.forceShutdown();
  }
}

function main() {
  const server = new grpc.Server();
  let serverCreds;
  const tls = false;

  if (tls) {
    const rootCert = fs.readFileSync('./ssl/ca.crt');
    const certChain = fs.readFileSync('./ssl/server.crt');
    const privateKey = fs.readFileSync('./ssl/server.pem');

    serverCreds = grpc.ServerCredentials.createSsl(rootCert, [
      {
        cert_chain: certChain,
        private_key: privateKey,
      },
    ]);
  } else serverCreds = grpc.ServerCredentials.createInsecure();

  process.on('SIGINT', () => {
    console.log('interrup signal encoutnered');

    cleanup(server);
  });

  server.addService(AuthServiceService, {
    login: handlers.loginHandler,
  });

  server.bindAsync(SERVER_ADDR, serverCreds, (err, _) => {
    if (err) {
      return cleanup(server);
    }
    server.start();
  });
}

main();
