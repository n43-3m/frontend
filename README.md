
# Vite and tanstack router


ready to use template for Vite and tanstack router with biomeJs.

## Tools and Technologies
- Vite 
- react
- typescript
- tailwindcss
- tanstack router
- biomeJs
- pnpm
- lint-staged
- husky

<!-- - <img src="https://vitejs.dev/logo.svg" alt="Vite" width="40" height="40" title="Vite: A build tool that provides a faster and leaner build for modern web projects."> | A build tool that provides a faster and leaner build for modern web projects.                                  |
| React          | <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png?20220125121207" alt="React" width="40" height="40" title="React: A JavaScript library for building user interfaces.">         | A JavaScript library for building user interfaces.                                                               |
| TailwindCSS    | <img src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg" alt="TailwindCSS" width="40" height="40" title="TailwindCSS: A utility-first CSS framework for building custom designs without leaving your HTML."> | A utility-first CSS framework for building custom designs without leaving your HTML.                                 |
| TanStack Router | <img src="https://tanstack.com/images/logos/logo-color-600.png" alt="TanStack Router" width="40" height="40" title="TanStack Router: A powerful and flexible routing library for React."> | A powerful and flexible routing library for React.                                                                 | -->

## Default Routes

This starter kit comes with a default route:

- **Root Route (`/`)**: Displays a simple message "its working!" in the center of the screen.

## Important:

- after cloning the repository, make sure to remove the `.git` folder and initialize a new git repository.
- make sure to update the `name` and `version` fields in the `package.json` file.

## Installation

Clone the repository and install the dependencies:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/n43-3m/frontend.git
   cd frontend
2. **Install the Dependencies:**

   ```bash
   pnpm i
   ```
3. **remove the `.git` folder and initialize a new git repository :**
   ### Linux/MacOS:
    ```bash
    rm -rf .git
    git init
    ```
   ### Windows:
   ```bash
   rmdir /s .git
   git init
   ```

## Running the Project

To run the project, use the following command:

```bash
pnpm dev
```

This will start the Vite development server on `http://localhost:5173`.

## Building the Project

To build the project, use the following command:

```bash
pnpm build
```

This will generate a production-ready build in the `dist` folder.


