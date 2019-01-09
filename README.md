## Installation

After clone this project, just type in console npm install when you are in the project folder

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Cange path to api

To change path to api just rewrite constant `path` at `./src/services/apiPath.js`

### Change table header fields

In case when you need to render table with fields diferrent from current, you should change returned table cells in `./src/components/Users/Table.js` and render method in `./src/components/User.js` and change constant `fields` in `./src/components/Users/index.js`

### Change limit of table rows

If you need to render table with different rows number, you should change constant `pageLimit` in `./src/components/Users/index.js`
