# React + Vite : Bicycle Shop

"Proof of craft" project for testing React 19 and various FE
concepts in a sterile context.

### Live Demo

https://newmediapilot.github.io/react-19-bike-shop

#### Powered by:

- [Yarn](https://yarnpkg.com/)
- [Vite](https://vite.dev/)
- [React 19](https://react.dev/learn/build-a-react-app-from-scratch)
- [React Router](https://api.reactrouter.com/v7/functions/react_router.createBrowserRouter.html)
- [React Redux](https://react-redux.js.org/introduction/getting-started)
- [React Hook Form](https://react-hook-form.com)
- [Workbox CLI](https://developer.chrome.com/docs/workbox/)
- [Skeleton UI](https://www.skeleton.dev/)
- [Radix UI](https://www.radix-ui.com/)
- [React Spring](https://www.react-spring.dev/)
- [LoDash](https://lodash.com/)
- [JSON Server](https://www.npmjs.com/package/json-server)

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
- [DetailDialog.tsx](src/components/ListingsDialog.tsx)
- [Listings.tsx](src/components/core/CTable.tsx)
- [Nav.tsx](src/components/NavGlobal.tsx)
- [Search.tsx](src/components/InputSearch.tsx)

### Pages

> ##### Focus
> - Acting as HOC (for now)
> - `selectors` to drill data into components

- [Catch.tsx](src/pages/PCatch.tsx)
- [Components.tsx](src/pages/PComponents.tsx)
- [Index.tsx](src/pages/PListings.tsx)

### Redux + Loader

> Each loader definition is processed by [loaderHandler.tsx](src/loaders/core/loaderHandler.ts)
> It manages how states are hydrated (fetch or cached)
>
> This is the general flow of data in `loaderHandler`:

1. IF `redux` defined return `redux` data
1. IF `redux` undefined use `fetch`
1. IF `fetch` 200 set `local` && dispatch `redux`
1. IF `fetch` errors stub `fixture` && continue...
1. IF `local` defined overwrite stub
1. dispatch`redux`

> If the last step fails we fallback to  `fixture`. 
> This is just so that `gh-pages` can function. 

### Prefetch

> Since we aren't using NextJS we have to write a pre-fetch solution 
> Prefetch is handled by [pf.ts](src/loaders/core/pf.ts)

- When we define a loader via `loaderHandler` we provide a `route:string`

```
// TODO: define loader
```
```
// TODO: infoke prefetch
```

### Environment variables

Vite uses `VITE_{VARIABE}` to define its environment by default.
`.env()` consumes and scans the files on compile.

- [.env.local](.env.uat)
- [.env.development](.env.development)
- [.env.production](.env.production)

### Required Variables

- `VITE_DB` informs `loaderHandler` how to join paths when using `fetch()`
> Stubbed with `http://localhost:3000`

# Deployment

`npm run deploy`

1. Resets node modules via `npm run reset`
1. Prompts to flatten the current branch to the newest tag
1. Prompts to make a deployment
1. Bumps version and amends commit with build message
1. Adds git tag
1. Pushes to `gh-pages`

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