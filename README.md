
# Frontend Starter Kit


ready to use template for Vite and tanstack router with biomeJs.

## Tools and Technologies
- `Vite` (build tool)
- `react` (frontend framework)
- `typescript` (js compiler)
- `tailwindcss` (css framework)
- `tanstack` router (routing library)
- `biomeJs` (linter)
- `pnpm` (package manager)
- `git` (version control)
- `lint-staged` (linter)
- `husky` (git hooks)


## Default Routes

This starter kit comes with a default route:

- **Root Route (`/`)**: Displays a simple message "its working!" in the center of the screen.

## Important:

- after cloning the repository, make sure to remove the `.git` folder and initialize a new git repository.
- make sure to update the `name` and `version` fields in the `package.json` file.

## Installation

Clone the repository and install the dependencies:

1. **Clone the Repository:**

   ##### if u already have the project folder (make sure it is empty)
   ```bash
   git clone https://github.com/n43-3m/frontend.git
   ```
   ##### if u don't have the project folder. it will clone the project in frontend folder.
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


