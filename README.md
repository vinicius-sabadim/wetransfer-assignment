[Online demo](https://vinicius-sabadim.github.io/wetransfer-assignment)

# WeTransfer - Frontend Engineer Assignmet

When uploading files on https://wetransfer.com you see our famous progress spinner. It grows and grows as it spins around, showing the percentage in the centre.

## Requirements

Your goal is to recreate the spinner as a reusable web component and include start and end buttons that enable or disable the spinning.

## Implementation notes

- To simulate the upload of a file, there is a 200ms `setInterval`.
- The percentage of progress when uploading is a random value.

## Usage

```js
<Spinner isActive={true} progress={45} />
```

## API

| Name        | Type    | Default | Description                           |
| ----------- | ------- | ------- | ------------------------------------- |
| isUploading | boolean | `false` | Set when is uploading a new file.     |
| progress    | number  | `0`     | Show the progress value.              |
| size        | number  | `160`   | Set height and width for the spinner. |
| stroke      | number  | `12`    | Set stroke of the spinner.            |

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

### `npm run deploy`

Builds the app for production and deploy it using Github Pages to https://vinicius-sabadim.github.io/wetransfer-assignment
