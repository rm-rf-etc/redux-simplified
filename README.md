# Simple Shared State

Redux is verbose. SimpleSharedState is brief.

- Docs: [https://simplesharedstate.com](https://simplesharedstate.com)
- Repo: [https://github.com/rm-rf-etc/simple-shared-state](https://github.com/rm-rf-etc/simple-shared-state)
- Example app: [https://simple-shared-state.stackblitz.io/](https://simple-shared-state.stackblitz.io/)
- Edit online: [https://stackblitz.com/edit/simple-shared-state](https://stackblitz.com/edit/simple-shared-state)


## Status

SimpleSharedState is still relatively experimental. Versions are following semver, but the version being greater
than 1.0 doesn't mean it's considered production ready just yet. Please review the project source and tests to
determine if it's viable for your project. More elaborate tests are needed to test SimpleSharedState performance
against Redux.


## Get It

```
npm install simple-shared-state
```

If using script tags:
```html
<script src="https://unpkg.com/simple-shared-state"></script>
<script>
  const store = SimpleSharedState.createStore({});
</script>
```

### Support for Internet Explorer

Use `dist/simple-shared-state.es5.umd.js`. For example:
```html
<script src="https://unpkg.com/simple-shared-state@4.0.0/dist/simple-shared-state.es5.umd.js"></script>
```


## Basic Use

First create a store.
```javascript
import { createStore } from "simple-shared-state";

const initialState = {
  user: {
    name: "Alice",
    slogan: "simple-shared-state makes apps fun again",
  },
};
const actions = () => ({
  changeSlogan: (newSlogan) => ({
    user: {
      slogan: newSlogan,
    },
  }),
});
const store = createStore(initialState, actions);
```
Then create a watcher. Don't worry about error handling in selectors, just return
the state that you want.
```javascript
const selector = (state) => state.user;

store.watch(selector, (state) => {
  console.log("user snapshot:", state);
});
```
Then call your action to update state and trigger the watch handler.
```javascript
store.actions.changeSlogan("simple-shared-state is better than cat memes");
// 'user snapshot:' { name: 'Alice', slogan: 'simple-shared-state is better than cat memes' }
```


## Redux Devtools

Works with devtools, of course. Just pass in the reference like this:
```javascript
const store = createStore(initialState, actions, window.__REDUX_DEVTOOLS_EXTENSION__);
```


## React Hooks

Not published yet but coming in the next couple days. See [use-simple-shared-state](https://github.com/rm-rf-etc/simple-shared-state/blob/master/packages/use-simple-shared-state/index.js)
for a working hook example, `useSimpleSharedState`.


## Concepts

Redux and SimpleSharedState have slightly different scope. If you're comparing one to the other in terms of performance, note
that SimpleSharedState has more features (with roughly 2/3 the bundle size). The included test suite has some performance
tests if you're interested, and you can test the build result with `yarn build && yarn test`.

Terms like `reducers` and `action creators` will be reused for developer familiarity, but a "reducer" in SimpleSharedState is
not the same as a "reducer" in Redux.

## Future Work

- Atoms for stateful, network-bound event handling (not thunks)
