# React + Vite : Bicycle Shop

#### Powered by:

- [Yarn](https://yarnpkg.com/)
- [Vite](https://vite.dev/)
- [React 19](https://react.dev/learn/build-a-react-app-from-scratch)
- [React Router](https://api.reactrouter.com/v7/functions/react_router.createBrowserRouter.html)
- [React Redux](https://react-redux.js.org/introduction/getting-started)
- [React Hook Form](https://react-hook-form.com)
- [Radix UI](https://www.radix-ui.com/)
- [Emotion CSS](https://emotion.sh/)
- [React Spring](https://www.react-spring.dev/)
- [JSON Server](https://www.npmjs.com/package/json-server)
- [Workbox CLI](https://developer.chrome.com/docs/workbox/)

> AI was used to generate `db.json`

# Command List

> package.json
- [React + Vite : Bicycle Shop](#react--vite--bicycle-shop)
- [Preview](#preview)
- [Live Demo](#live-demo)
- [Development](#development)
  - [All `package.json` commands](#all-packagejson-commands)
- [References](#references)
  - [Command Comparison](#command-comparison)

# Preview

```
npm i
npm run build
npm run preview
```

In a separate window run:
```
npm run db
```

# Live Demo

https://newmediapilot.github.io/react-19-bike-shop

```
npm run deploy
```

# Development

```
npm run dev
```

### All `package.json` commands

`yarn run <command>`

| **Script**   | **Command**                                 | **Description**               |
|--------------|---------------------------------------------|-------------------------------|
| `dev`        | `vite`                                      | Local development             |
| `build`      | `vite build`                                | Production build              |
| `db`         | `npx json-server public/db.json`            | Local mock database           |
| `lint`       | `eslint my-app`                             | Linter                        |
| `preview`    | `vite preview`                              | Preview production build      |
| `deploy`     | `bash script/deploy-preview.sh`             | Deploy to preview             |
| `gw`         | `node util/watch.js`                        | Watch git for changes         |
| `gp`         | `node util/push.js`                         | Flatten branch && `push -f`   |

# Technical Features

### Components

> ##### Focus
> - Only emit actions
> - Receive data via ( props | selector )
> - Styling & Bindings eg. `{prop.value}`

- [AppVersion.tsx](src/components/AppVersion.tsx)
- [DetailDialog.tsx](src/components/DetailDialog.tsx)
- [Listings.tsx](src/components/Listings.tsx)
- [Nav.tsx](src/components/Nav.tsx)
- [Search.tsx](src/components/Search.tsx)

### Redux + Loader

> Each loader definition is processed by [loaderHandler.tsx](src/loaders/loaderHandler.ts)
> It manages how states are hydrated (fetch or cached)
>
> This is the general flow of data in a loader:

1. IF `redux` defined return `redux` data
1. IF `redux` undefined use `fetch`
1. IF `fetch` 200 set `local` && dispatch `redux`
1. IF `fetch` !200 stub `fixture` && continue
1. IF `local` defined
1. dispatch`redux`

> If the last step fails we will just use the `fixture`. 
> This is just so that `gh-pages` can function.

### Environment variables

Vite uses `VITE_{VARIABE}` to define its environment by default.
`.env()` consumes and scans the files on compile.

- [.env.local](.env.local)
- [.env.development](.env.development)
- [.env.production](.env.production)

# References

> Switching to `yarn`

### Command Comparison

| Command                      | `npm *`                   | `yarn *`                 |
|------------------------------|---------------------------|--------------------------|
| Init project                 | `npm init`                | `yarn init`              |
| Install dependencies         | `npm install`             | `yarn` or `yarn install` |
| Install specific package     | `npm install lodash`      | `yarn add lodash`        |
| Install dev dependency       | `npm install --save-dev`  | `yarn add --dev`         |
| Remove package               | `npm uninstall lodash`    | `yarn remove lodash`     |
| Upgrade package              | `npm update lodash`       | `yarn upgrade lodash`    |
| Run script                   | `npm run start`           | `yarn start`             |
| List installed packages      | `npm list`                | `yarn list`              |
| Audit security issues        | `npm audit`               | `yarn audit`             |
| Add globally                 | `npm install -g <pkg>`    | `yarn global add <pkg>`  |