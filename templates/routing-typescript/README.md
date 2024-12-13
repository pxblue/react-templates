# Brightlayer UI Routing Template
## React + TypeScript + Vite + Vitest + Testing-library

This template installs the basic Brightlayer UI libraries for themes and components and configures the application to use them. It includes the installation and initial setup of routing using [React Router](https://reactrouter.com/). It includes several placeholder routes/screens and a [Drawer](https://brightlayer-ui-components.github.io/react/?path=/info/components-drawer--get-read-me-story) navigator from the Brightlayer UI [React Component Library](https://www.npmjs.com/package/@brightlayer-ui/react-components).

## This project was setup with Brightlayer UI Packages

-   [React Components](https://www.npmjs.com/package/@brightlayer-ui/react-components)
-   [Theme](https://www.npmjs.com/package/@brightlayer-ui/react-themes)
-   [Icons-mui](https://www.npmjs.com/package/@brightlayer-ui/icons-mui)
-   [Colors](@brightlayer-ui/colors)
-   [Prettier](https://www.npmjs.com/package/@brightlayer-ui/prettier-config) 
-   [ESlint](https://www.npmjs.com/package/@brightlayer-ui/eslint-config)

## Vite and Vite plugins

-   [Vite](https://github.com/vitejs/vite)
-   [vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh.
-   [vite-tsconfig-paths](https://www.npmjs.com/package/vite-tsconfig-paths) give vite the ability to resolve imports using TypeScript's path mapping.

## Test setup
-   [vitest](https://vitest.dev/guide/)
-   [testing-library/react](https://github.com/testing-library/react-testing-library#readme)
-   [testing-library/dom](https://github.com/testing-library/dom-testing-library#readme)
-   [testing-library/jest-dom](https://github.com/testing-library/jest-dom#readme)
-   [testing-library/user-event](https://github.com/testing-library/user-event#readme)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### `yarn preview`

Runs the app in the production mode and requires `yarn build`. This allows you to serve and test the production version of your app locally.
Open [http://localhost:4300](http://localhost:4300) to view it in the browser.

### `yarn test`

Launches test runner in the interactive watch mode.
See the React Testing Library [setup & running tests](https://testing-library.com/docs/react-testing-library/setup/) and Vitest [setup & guide](https://vitest.dev/guide/) for more information.

### `yarn build`

Builds the app for production to the `dist` folder.
It correctly bundles React in production mode and optimizes the build for the best performance. See the [vite getting started](https://vitejs.dev/guide/#getting-started) for additional information.

### `yarn prettier`

[Brightlayer UI Prettier Configuration](https://www.npmjs.com/package/@brightlayer-ui/prettier-config) used to enforce consistent code style.

### `yarn lint`

[Brightlayer UI ESLint Configuration](https://www.npmjs.com/package/@brightlayer-ui/eslint-config) for Typescript and TSX projects. ESLint is used for enforcement of code quality across Brightlayer UI applications.

## Learn More

You can learn more in the [Vite documentation](https://vitejs.dev/guide/).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

Vite Build Optimizations: [https://vitejs.dev/guide/features#build-optimizations](https://vitejs.dev/guide/features#build-optimizations)

### Analyzing the Bundle Size

vite-bundle-visualizer: [https://github.com/KusStar/vite-bundle-visualizer#readme](https://github.com/KusStar/vite-bundle-visualizer#readme)

### Making a Progressive Web App

Vite PWA resource: [https://vite-pwa-org.netlify.app/guide/](https://vite-pwa-org.netlify.app/guide/)

### Configurations

Configuring Vite: [https://vitejs.dev/config/](https://vitejs.dev/config/)

### Deployment

Vite deployment: [https://vitejs.dev/guide/static-deploy](https://vitejs.dev/guide/static-deploy)
