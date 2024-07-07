# Veterinary Project with Microservices

## Problem

A veterinarian needs a system to manage pet information, list registered pets, and allow access to the veterinarian's owner through an authentication system.

### Built With

This multirepo was built using the technologies of express, axios, and JavaScript.


* [![Express][Express]][Express-url]
* [![Ioredis][Ioredis]][Ioredis-url]
* [![JavaScript][JavaScript]][JavaScript-url]
* [![JsonWebToken][JsonWebToken]][JsonWebToken-url]

## Project Structure

This project is made up of three microservices:

1. **pets**: Allows you to add new pets.
2. **list-pets**: List all registered pets.
3. **authentication**: Allows authentication of the owner of the veterinary clinic.

Additionally, the project uses Redis as shared storage for the pets.

### Prerequisites

You must have the Docker desktop downloaded on the computer, due to the docker-compose in addition to having Postman installed, and the latest version of npm
* npm
  ```sh
  npm install npm@latest -g
  ```
* Windows Version Docker Desktop
[Docker](https://docs.docker.com/desktop/install/windows-install/)

* Windows Postman app version
[Postman](https://www.postman.com/downloads/)

### Installation

_This is the installation of the project._

1. Clone the repo
   ```sh
   git clone https://github.com/Matari7/veterinary-microservice
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Open the terminal and type the following command
   ```sh
   docker-compose up --build
   ```




<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

1. Open Postman and add the following URL in the POST method:
```sh
http://localhost:3000/pets
```
2. Add the following body in the JSON format:
```sh
{
  "name": "Fidoe",
  "breed": "Labrador",
  "gender": "Macho"
}

```
3. Click on the Send button and you will see the following response:

'Pet added'

4. To review the created pets, just change the endpoint to and switch to the GET method.

```sh
http://localhost:3001/pets
```

5. To use the login microservice, we just need to create a new tab and put the following URL in the method:
```sh
http://localhost:3002/login
```

5. To log in, you just need to copy the same JSON of the created user in the code like this:
```sh
{
  "username": "admin",
  "password": "password"
}
```
6. Click on the Send button and you will see the following response:

Once logged in, you will get a JSON message with the token that lasts only 1 hour

7. After the token that the system will provide you, you are going to put it in Authorization and in Bearer Token you paste the received token

![Captura de pantalla](https://i.imgur.com/BW8qBIx.png)
 <!-- CONTRIBUTING -->
## Contributing

This project was carried out by the following collaborator:

* [Cristian Caiza](https://github.com/antichrist667)
* [Ariel Campoverde](https://github.com/Matari7)

<!-- MARKDOWN LINKS & IMAGES -->
[Express]: https://img.shields.io/badge/express-8A2BE2
[Express-url]: https://axios-http.com/docs/intro
[Ioredis]: https://img.shields.io/badge/Ioredis-FE146D
[Ioredis-url]: https://ioredis.readthedocs.io/en/stable/README/
[JavaScript]: https://img.shields.io/badge/logo-javascript-blue?logo=javascript
[JavaScript-url]: https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/What_is_JavaScript
[JsonWebToken]: https://img.shields.io/badge/JsonWebToken-D5A000
[JsonWebToken-url]: https://jwt.io/introduction