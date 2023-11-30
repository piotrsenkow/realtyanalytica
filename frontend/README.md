# Realty Analytica Frontend

This is the frontend of the Realty Analytica application, built with Next.js and designed to interface with the Realty Analytica Backend. It provides a user interface for real estate analytics and data presentation.

## Getting Started

These instructions will guide you in getting a copy of the frontend running on your local machine for development and testing purposes.

### Prerequisites

What you need to install the software:

- [Node.js](https://nodejs.org/en/) (v12 or higher recommended)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)
- Access to the backend server (`backend`)

### Installing

Follow these steps to set up your development environment:

1. **Clone the Repository:**
   
   ```sh
   git clone [https://github.com/piotrsenkow/realtyanalytica.git](https://github.com/piotrsenkow/realtyanalytica.git)
   cd frontend
   ```

2. **Install Dependencies:**

   Install the required packages using npm:

   ```sh
   npm install
   ```

3. **Environment Configuration:**

   - Set up any necessary environment variables, such as the backend API URL, in a `.env.local` file in the root of the project.
   - Example of `.env.local`:

     ```env
     NEXT_PUBLIC_API_URL=http://localhost:4000/graphql
     ```

4. **Running the Development Server:**

   Start the development server with:

   ```sh
   npm run dev
   ```

   This will start the Next.js application on `http://localhost:3000`.

5. **Accessing the Application:**

   Open your browser and navigate to `http://localhost:3000` to view and interact with the application.

   ----
    You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

    [API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

    The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

    This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

    ## Learn More

    To learn more about Next.js, take a look at the following resources:

    - [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
    - [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

    You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
   ----

## Running Tests

Provide instructions on how to run any tests that you have set up (if applicable).

## Deployment

Include additional notes about how to deploy the frontend application, such as deploying to Vercel, Netlify, or other hosting platforms.

## Built With

- [Next.js](https://nextjs.org/) - The React framework used
- [Tailwind CSS](https://tailwindcss.com/) - Styling framework
- [Other Libraries/Frameworks]

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](#).

## Authors

- **Piotr Senkow** - *Initial work* - [github.com/piotrsenkow](https://github.com/piotrsenkow)

## License

This project is licensed under the [MIT License](LICENSE.md).

## Acknowledgments

- Hat tip to anyone whose code was used
