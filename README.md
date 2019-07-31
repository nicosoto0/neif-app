This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Before Start

1. Run following command to install dependencies:
```ssh
yarn add --dev eslint prettier eslint-config-airbnb@^15.0.1 eslint-config-prettier eslint-plugi
n-prettier eslint-plugin-react eslint-plugin-import eslint-plugin-jsx-a11y@^5.1.1

```

### For stayle:
```ssh
yarn add semantic-ui-react semantic-ui-css
```

### For Validation of forms
```ssh
yarn add validator
```

### Other packages needed:
```ssh
yarn add react-router react-router-dom
yarn add prop-types
yarn add redux react-redux redux-thunk
yarn add --dev redux-devtools-extension
yarn add axios
```

## Available Scripts

In the project directory, you can run:

### `npm start`

## Run Docker

```ssh
yarn build
bash run.sh
```

Check: http://localhost:8080/

PS: make sure with command:  `docker ps -a` that there isn't another container running with the same APP name. (file run.sh)