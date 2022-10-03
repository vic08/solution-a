# Aave-test CLI

## Run the project locally

1. Install dependencies and build
```shell
nvm use
npm i
npm run build
```

2. Create a global link of the current package
```shell
npm link
```

3. The CLI is now available on your terminal via `aave-test` command:
```shell
aave-test balances ./data.json
```

## See available CLI commands
```shell
aave-test -h
```

## Run unit tests
```shell
npm t
```

## Run eslint
```shell
npm run lint
npm run lint:fix
```
