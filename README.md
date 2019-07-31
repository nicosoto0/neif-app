This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Requirements
- **node**: ^8.10.0
- **npm**: ^5.6.0
- **yarn**: ^1.9.4

PS: It is posible that the app can work with other versiones of the requirements (higher more than lower). The requirementes versiones listed are then ones used during development. 
PS2: It's posible to switch easily **node** version with **Node Version Manager** (nvm) :
```bash
nvm install 8.10.0
```
# Running App

1. Install all packages:

```bash
yarn install
```

For more details on dependencies and packages, check package.json file

2. Run application:

-> With **yarn**

```bash
yarn start
```

-> With **npm**

```bash
npm start
```

Check: http://localhost:3000/

## Run Docker

```bash
yarn build
bash run.sh
```

Check: http://localhost:8080/

PS: make sure with command:  `docker ps -a` that there isn't another container running with the same APP name.  (check app name in: file run.sh)