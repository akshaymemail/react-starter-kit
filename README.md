You are welcome to use this project.

# Docs

This project wouldn't be possible without the help of your contributions. What you see today is the product of hundreds changes made to keep up with an ever-evolving ecosystem. [Thank you](#thank-you) for all of your help.

## Table of Contents

1. [Requirements](#requirements)
1. [Installation](#getting-started)
1. [Running the Project](#running-the-project)
1. [Project Structure](#project-structure)
1. [Live Development](#local-development)
   - [Hot Reloading](#hot-reloading)
   - [Redux DevTools](#redux-devtools)
1. [Routing](#routing)
1. [Building for Production](#building-for-production)
1. [Deployment](#deployment)
1. [Thank You](#thank-you)

## Requirements

- node `v16.17.0`
- npm `v8.15.0`

## Installation

After confirming that your environment meets the above [requirements](#requirements), you can get a copy of this software by doing the following:

```bash
$ git clone https://github.com/akshaymemail/react-starter-kit.git
<my-project-name>
$ cd <my-project-name>
```

### Add environments variables

.env.development

```bash
REACT_APP_BASE_URL=<baseUrl>
```

.env.production

```bash
REACT_APP_BASE_URL=<baseUrl>
```

.env.test

```bash
REACT_APP_BASE_URL=<baseUrl>
```

When that's done, install the project dependencies. It is recommended that you use `npm install`.

## Running the Project

After completing the [installation](#installation) step, you're ready to start the project!

```bash
$ npm start  # Start the development server
```

While developing, you will probably rely mostly on `npm start`; however, there are additional scripts at your disposal:

| `npm <script>` | Description                         |
| -------------- | ----------------------------------- |
| `start`        | Serves your app at `localhost:3000` |
| `build`        | Builds the application to ./build   |

## Project Structure

The project structure presented in this boilerplate is **fractal**, where functionality is grouped primarily by feature rather than file type. This structure is only meant to serve as a guide, it is by no means prescriptive. That said, it aims to represent generally accepted guidelines and patterns for building scalable applications. If you wish to read more about this pattern, please check out this [awesome writeup](https://github.com/davezuko/react-redux-starter-kit/wiki/Fractal-Project-Structure) by [Justin Greenberg](https://github.com/justingreenberg).

```
.
├── build                    # All build-related code
├── public                   # Static public assets (not imported anywhere in source code)
├── src                      # Application source code
│   ├── API                  # API endpoints and client configuration
│   │   └── endpoints.js     # All Endpoints used in the project
│   │   └── http.js          # API client configuration
│   ├── components           # Global Reusable Components
│   ├── db                   # Hard coded json files
│   │   └── users.js         # An example of all timezones information
│   ├── helpers              # Global Reusable helpers functions
│   ├── layouts              # Components that dictate major page structure
│   │   └── Layout.js        # Global application layout in which to render
│   ├── redux                # Redux configuration and feature
│   │   └── auth             # Authentication related types, reducers and actions
│   │   │   ├── types.js     # Authentication types
│   │   │   ├── reducers.js  # Authentication reducers
│   │   │   ├── actions.js   # Authentication actions
│   │   └── rootReducer.js   # Combines all reducers in a single reducer
│   │   └── store.js         # Redux store configuration
│   ├── router               # Main route definitions and async split points
│   │   ├── Router.js        # Bootstrap main application routes with store
│   │   ├── routes           # Fractal route
│   │   │   ├── auth.js      # All authentication routes
│   │   │   ├── quiz.js      # All quiz routes
│   │   │   ├── index.js     # Combines all routes in single unit
│   └── utils                # Global utilities
│   ├── views                # All Fractal based screens
│   │   └── auth             # Authentication related screens
│   │   │   ├── Login.js     # Login screen
│   │   │   ├── Register.js  # Register screen
│   │   │   ├── Profile.js   # Profile screen
│   │   └── Pages /*         # common pages like 404, error, under maintenance etc
│   │   └── Todos  /*        # todos screens
│   ├── i18n.js              # Globalization
│   ├── index.css            # Global css
```

## Live Development

### Hot Reloading

Hot reloading is enabled by default when the application is running in development mode (`npm start`). This feature is implemented with webpack's [Hot Module Replacement](https://webpack.github.io/docs/hot-module-replacement.html) capabilities, where code updates can be injected to the application while it's running, no full reload required. Here's how it works:

- For **JavaScript** modules, a code change will trigger the application to re-render from the top of the tree. **Global state is preserved (i.e. redux), but any local component state is reset**. This differs from React Hot Loader, but we've found that performing a full re-render helps avoid subtle bugs caused by RHL patching.

- For **Sass**, any change will update the styles in realtime, You need to install live saas compiler and trigger watch saas

### Redux DevTools

**We recommend using the [Redux DevTools Chrome Extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd).**
Using the chrome extension allows your monitors to run on a separate thread and affords better performance and functionality. It comes with several of the most popular monitors, is easy to configure, filters actions, and doesn't require installing any packages in your project.

Since redux devtools already configured, However you will need to install redux devtools extension for you browser:

Then follow the [manual integration walkthrough](https://github.com/gaearon/redux-devtools/blob/master/docs/Walkthrough.md) for any changes.

## Routing

We use `react-router-dom v6.X.X` [route definitions](https://github.com/remix-run/react-router#readme) (`<route>/Router.js`) to define units of logic within our application. See the [project structure](#project-structure) section for more information.

## Building for Production

## Deployment

Out of the box, this starter kit is deployable by serving the `./build` folder generated by `npm build`.

### Static Deployments

Serve the application with a web server such as nginx by pointing it at your `./build` folder. Make sure to direct incoming route requests to the root `./build/index.html` file so that the client application will be loaded; react-router will take care of the rest. If you are unsure of how to do this, you might find [this documentation](https://github.com/reactjs/react-router/blob/master/docs/guides/Histories.md#configuring-your-server) helpful.

## Thank You

Everyone who has contributed to this project
