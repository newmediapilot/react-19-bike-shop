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

```
npm run db // Separate window
npm run dev
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

- Define a loader via `loaderHandler` we provide a `route:string`
- Use the result inside your `router` to prepare for `prefetch`
- Then register the `prefetch` recall in your components


```

```
```
// TODO: infoke prefetch
```

### Environment variables

Vite uses `VITE_{VARIABE}` to define its environment by default.
`.env()` consumes and scans the files on compile.

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

