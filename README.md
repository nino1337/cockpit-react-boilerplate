# Cockpit React boilerplate

## Technologies used

### Cockpit

- [Homepage](https://getcockpit.com)
- [Github Repository](https://github.com/agentejo/cockpit)

[Cockpit](https://getcockpit.com) serves as our [headless cms](https://en.wikipedia.org/wiki/Headless_content_management_system). Cockpit is php based, thus it brings the advantage, that no node is required on our hosting server.

### React

- [Homepage](https://reactjs.org/)
- [Github Repository](https://github.com/facebook/react/)

React on the other hand is used to build our dynamic frontend. It firstly of course renders our components and secondly handles client side routing with the react-router-dom library.

### Jest

- [Homepage](https://jestjs.io/)
- [Github Repository](https://github.com/facebook/jest)

Jest is a delightful JavaScript Testing Framework with a focus on simplicity.

### React-testing-library

- [Homepage](https://testing-library.com/)
- [Github Repository](https://github.com/testing-library)

React Testing Library builds on top of DOM Testing Library by adding APIs for working with React components.

### Emotion

- [Homepage](https://emotion.sh/docs/introduction)
- [Github Repository](https://github.com/emotion-js/emotion)

Emotion is a library designed for writing css styles with JavaScript. It provides powerful and predictable style composition in addition to a great developer experience with features such as source maps, labels, and testing utilities. Both string and object styles are supported.

### Eslint, Prettier, Husky

- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://github.com/typicode/husky#readme)

Using eslint, prettier and husky gives us the ability to equal code standards and style-formations across the team.

## Getting started

Before starting to set up the workflow, make sure to have **Node** and **docker** installed on your machine and of course to clone this repo.

1. Open a terminal of your choice and navigate into the root of our repository.
2. Install all dependencies with `npm i`.
3. Initialise the workflow with `npm run init`.
4. Once done, run `npm start`.
5. Under http://localhost:8080 you should now be able to log-in with admin/admin. On http://localhost:3000 you should see the frontend with some pre-defined pages you can navigate to.
6. Happy coding
