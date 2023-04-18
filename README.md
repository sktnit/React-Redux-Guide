# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

Start by creating a new React app using create-react-app:
npx create-react-app react-redux-todo
cd my-app
Install the required packages:
npm install redux react-redux redux-thunk redux-persist
Create a new directory store in the src directory.
mkdir src/store
Inside the store directory, create a new file called index.js.
touch src/store/index.js
Open the index.js file and create the Redux store using redux-persist: 
<img width="1280" alt="Screenshot 2023-04-19 at 12 39 52 AM" src="https://user-images.githubusercontent.com/67646236/232895988-75546097-248b-4b11-8f5f-fb9082eabd7c.png">


Create a reducers directory in the src folder and todos and counter directories for multiple reducers:
mkdir src/reducers
mkdir src/reducers/todos
mkdir src/reducers/counter
Create todoSlice.js inside the src/reducers/todos/ and add actions such as addTodo, deleteTodo, and toggleTodo to the reducer object. Here’s an example: 
<img width="1280" alt="Screenshot 2023-04-19 at 12 39 52 AM" src="https://user-images.githubusercontent.com/67646236/232896464-ace3e02b-94ed-4365-b674-57c1c9a8cec6.png">

Create counterSlice.js inside the src/reducers/counter/ and add actions such as increment or decrement to the reducer object. Here’s an example:
<img width="1280" alt="Screenshot 2023-04-19 at 12 44 32 AM" src="https://user-images.githubusercontent.com/67646236/232896582-69b2798a-578e-4431-bbaf-e831e4f6462a.png">

Now create a rootReducer.js to combine all the reducers. Here’s an example: 
<img width="1280" alt="Screenshot 2023-04-19 at 1 01 32 AM" src="https://user-images.githubusercontent.com/67646236/232897031-e7f5ed65-b06c-4758-b6c6-a5bfa04a8188.png">

Open the src/index.js file and import the Provider component from react-redux, the store, and persistor objects from store/index.js. Wrap the App component with the Provider component and PersistGate component:
<img width="1280" alt="Screenshot 2023-04-19 at 1 11 58 AM" src="https://user-images.githubusercontent.com/67646236/232897220-6025e37d-6a78-4f36-b73b-ca3daaf9fa9d.png">

Create a component.js to showcase Counter and Todos in the browser. Here’s an example code:
<img width="1280" alt="Screenshot 2023-04-19 at 1 16 04 AM" src="https://user-images.githubusercontent.com/67646236/232897319-161628c0-60d1-4b33-be6a-f1ddc1a846f2.png">
<img width="1280" alt="Screenshot 2023-04-19 at 1 16 38 AM" src="https://user-images.githubusercontent.com/67646236/232897371-43e4d9bd-0152-4b07-97a1-d2ee908d7aee.png">

Now do ‘npm start’ to run the app.
<img width="1280" alt="Screenshot 2023-04-19 at 1 29 18 AM" src="https://user-images.githubusercontent.com/67646236/232897586-d099d5ba-b026-4cf3-a7d6-44a329b99dd3.png">


