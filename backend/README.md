# Realty Analytica Backend

This is the backend service for the Realty Analytica application, built using Express and GraphQL. It handles all the server-side logic and database interactions for the real estate platform.

## Getting Started

These instructions will get your copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them:

- [Node.js](https://nodejs.org/en/) (v12 or higher recommended)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)
- A local or remote instance of [PostgreSQL](https://www.postgresql.org/)

### Installing

A step-by-step series of examples that tell you how to get a development environment running:

1. **Clone the Repository:**
   
   ```sh
   git clone [https://github.com/piotrsenkow/realtyanalytica.git](https://github.com/piotrsenkow/realtyanalytica.git)
   cd backend
   ```

2. **Install Dependencies:**

   Run the following command to install the necessary packages:

   ```sh
   npm install
   ```

3. **Set Up Environment Variables:**

   Create a `.env` file in the root of your project and update it with your local settings (like database connection details). For example:

   ```env
   DB_HOST=localhost
   DB_USER=yourusername
   DB_PASS=yourpassword
   DB_NAME=yourdbname
   PORT=4000
   ```

4. **Start the Server:**

   Run the following command to start the development server:

   ```sh
   npm start
   ```

   This will start the GraphQL server on `http://localhost:4000/graphql` (or another port if you specified one in `.env`).

5. **Accessing GraphQL Playground:**

   With the server running, you can access the GraphQL Playground in your web browser at `http://localhost:4000/graphql` for testing and exploring your GraphQL API.

## Running the Tests

Explain how to run the automated tests for this system (if applicable).

## Deployment

Add additional notes about how to deploy this on a live system.

## Built With

- [Express.js](https://expressjs.com/) - The web framework used
- [GraphQL](https://graphql.org/) - API Query Language
- [PostgreSQL](https://www.postgresql.org/) - Database

## Contributing

Please read [CONTRIBUTING.md](#) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](#).

## Authors

- **Piotr Senkow** - *Initial work* - [github.com/piotrsenkow](https://github.com/piotrsenkow)

## License

This project is licensed under the [MIT License](LICENSE.md).

## Acknowledgments

- Hat tip to anyone whose code was used


