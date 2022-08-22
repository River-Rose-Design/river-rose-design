# River Rose Design (river-rose-design)

A Quasar Project

## Install the dependencies

```bash
yarn
# or
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
quasar dev
```

### Lint the files

```bash
yarn lint
# or
npm run lint
```

### Format the files

```bash
yarn format
# or
npm run format
```

### Build the app for production

```bash
quasar build
```

### Deploy to production

Build the app for production
Drag contents of dist/spa to: https://s3.console.aws.amazon.com/s3/upload/quinnriverrose.com?region=us-west-2
!!!Don't drag assets unless you want to have to copy all assets again!!!
Create a new invaliation from a copy here: https://us-east-1.console.aws.amazon.com/cloudfront/v3/home?region=us-east-1#/distributions/E17XT7M57G45TV

### Update assets

Drag new assets to assets/gd (or /fine or /photo or /static) here: https://s3.console.aws.amazon.com/s3/buckets/quinnriverrose.com?region=us-west-2&prefix=assets/&showversions=false
Drag new src/assets.ts to /assets/assets.ts

### Customize the configuration

See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).
