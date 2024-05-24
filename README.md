<img width="1258" alt="image" src="https://github.com/smyaseen/frontend/assets/37702376/6337931f-1556-493c-89aa-29a0d44cbc19">

# Frontend



A React Frontend App with Login, Signup feature, with latest technology, tools, and best practices.

## Features

- **[JWT]** - JWT Login, and Refresh Token setup
- **[Tailwind CSS & NextUI]** - A utility-first CSS framework for rapid UI development
- **[ESlint]** and **[Prettier]** - For clean, consistent, and error-free code
- **[Jest and RTL]** and **[React Testing Library]** - For rock-solid unit tests
- **[T3 Env]** - Manage your environment variables with ease
- **[Husky]** - For Git Hooks, having auto commit check, lint-staged, and running tests on commit.
- **[Lint-Staged]** - For linting and prettier
- **[React Query]** - For async data management
- **[Import Resolver]** - For auto import resolve on save


## 🎯 Getting Started

To get started with this app, follow these steps:

1. Fork & clone repository:

```bash
## Don't forget to ⭐ star and fork it first :)
git clone https://github.com/smyaseen/frontend.git
```

2. Add ENV variables

```bash
VITE_API_URL="http://localhost:3000"
```

3. Install the dependencies:

```bash
npm install
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:5137](http://localhost:5137) with your browser to see the result.

6. This project uses a git hook to enforce. To install the git hook, run the following command in the root directory of the project:

```sh
npm run prepare
```

## Running Tests

- **Unit tests**: Run Jest tests using `npm run coverage`

## State Management

This app for being simple uses React Context for user state management
