# Microsevices Auth
## Introduction
  This project is a demo auth application that is centred around Microsevices and efficient gRPC communication. The codebase is a monorepo.

## Architecture 
   This is a brief breakdown of the architecture. Each service is a module in apps folder for your reference.
 - `client`: The front-end application built on ReactJS that a user interacts with. it's an interface between the user and the backend.
 - `server`: Backend service that acts as an interface between the client and the rest of the services. Any API calls made to the backend are handled by this service that may or may not communicate with other services and return the desired result.
 - `auth`: The service that handles auth related functionalities. Getting user data, logging the user in, etc. The current implementation uses the local mongodb database.
 - `database`: Spins up a local mongodb database in a docket container. It uses mongo-express for a UI based interaction with the db.
