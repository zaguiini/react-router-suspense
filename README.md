# react-router-suspense

See it in action [here](https://codesandbox.io/s/laughing-allen-1jyho)

For some reason lazy loading doesn't work in Code Sandbox, so you'll need to run locally to see the routes being fetched when needed. Note how the navigation bar is still visible even though it's fetching another route.

There's a `<Suspense />` boundary for each `<Switch />` statement in this case, but you can apply that to `<Route />` as well
