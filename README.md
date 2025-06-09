# React + Vite : Bicycle Shop

"Proof of craft" project for testing React 19 and various FE  
concepts in a sterile context.

# Table of Contents

- [Live Demo](#live-demo)
- [Local](#local)
- [All `package.json` commands](#all-packagejson-commands)
- [Technical Features](#technical-features)
  - [Redux + Loader](#redux--loader)
  - [Prefetch](#prefetch)
  - [Environment variables](#environment-variables)
- [Deployment](#deployment)
- [Component strategy](#component-strategy)
  - [Layouts](#layouts)
- [Components](#components)
- [Components/Core](#componentscore)
- [Powered by](#powered-by)

### Live Demo

https://newmediapilot.github.io/react-19-bike-shop

### Local

```
npm run dev  
npm run db // Separate window
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

This is the general flow of data in `loaderHandler`:

1. IF `redux` defined return `redux` data  
1. IF `redux` undefined use `fetch`  
1. IF `fetch` 200 set `local` && dispatch `redux`  
1. IF `fetch` errors stub `fixture` && continue...  
1. IF `local` defined overwrite stub  
1. dispatch`redux`  

> If the last step fails we fallback to `fixture`.  
> This is just so that `gh-pages` can function. 

### Prefetch

> Since we aren't using `NextJS` we have to write a pre-fetch solution  
> Prefetch is handled by [pf.ts](src/loaders/core/pf.ts)

- `pf` uses its own syntax to distribute a pre-fetch strategy  
- `pf.loader("@api/list")` prepares and returns a loader to invoke later  
- `pf.prefetch("@api/list")` downloads the data  
- `pf.loader("id@api/list")` prepares a loader and prepares loaders for sub-items  
- The produced list would hydrate `id@api/list` recursively as `@api/list/[id]`  
- We can then pre-fetch specific members as `pf.prefetch("@api/list/[0-9]")`  
- `pf.events("id@api/list")` is an `onMouseOver` mixin running `pf.prefetch`

```jsx
// Preloads list items `onMouseOver`
<>
  list.map((data, key)=> {
    <NavLink key={key} {...pf.events(`@api/list/${key}`)}>View Item</NavLink>
  }
</>
```

### Environment variables

Vite uses `VITE_{VARIABLE}` to define its environment by default.  
`.env()` consumes and scans the files on compile.

- [.env.development](.env.development)  
- [.env.production](.env.production)

- [.env]`VITE_DB` informs `loaderHandler` how to join paths when using `fetch()`  
> Stubbed with `http://localhost:3000` for `npm run db`  
> This will become your API root

# Deployment

`npm run deploy`

1. Resets node modules via `npm run reset`  
1. Prompts to flatten the current branch to the newest tag  
1. Prompts to make a deployment  
1. Bumps version and amends commit with build message  
1. Adds git tag  
1. Pushes to `gh-pages`

# Component strategy

- [Layouts](src/layouts/) are used as a general wrapper and declared in [router.tsx](src/composition/router.tsx)  
- Also in `router.tsx` [Page](src/page/) declarations and `prefetch("@route")` declarations are set  
- Page templates (eg. [PListings.tsx](src/pages/PListings.tsx)) assemble from (eg. [PListings/](src/pages/PListings/))  
- [Components](src/components/) general purpose components such as navbar  
- [Core Components](src/components/core) are frequently used atomic components

### Layouts

- Defines a `grid` strategy for its members

## Components

- Only hydrate via `selector`  
- Must use `useSelector`, cannot use `props`  
- Must fill their container `w&h-[100%]`

## Components/Core 

- Only hydrate via `props`  
- Must fill their container `w&h-[100%]`  
- Doesn't need to be visual eg. `Suspense`

# Powered by:

- [Yarn](https://yarnpkg.com/)  
- [Vite](https://vite.dev/)  
- [React 19](https://react.dev/learn/build-a-react-app-from-scratch)  
- [React Router](https://api.reactrouter.com/v7/functions/react_router.createBrowserRouter.html)  
- [React Redux](https://react-redux.js.org/introduction/getting-started)  
- [React Hook Form](https://react-hook-form.com)  
- [Workbox CLI](https://developer.chrome.com/docs/workbox/)  
- [Skeleton UI](https://www.skeleton.dev/)  
- [Hero Icons](https://heroicons.com/)  
- [React Spring](https://www.react-spring.dev/)  
- [LoDash](https://lodash.com/)  
- [JSON Server](https://www.npmjs.com/package/json-server)

> AI was used to generate `db.json`