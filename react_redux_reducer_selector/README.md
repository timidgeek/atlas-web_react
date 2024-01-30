![Redux](https://img-c.udemycdn.com/course/750x422/2035498_57a1.jpg)
# React Redux reducer+selector :sparkles:

Reducers are functions that determine how the state gets updated in response to actions.

<ins>Some key points on Redux reducers:</ins>
- Reducers are pure functions that take the previous state and an action as arguments, and return the next state
- They handle the state update logic in response to actions
- Multiple reducers can be composed to manage different slices of state
- Common pattern is to have a root reducer that delegates to other slice reducers


Selectors are functions that compute derived data from the store state.

<ins>Key aspects of selectors:</ins>
- Allow computing filtered/transformed state to pass to components
- Memoize selectors with libraries like Reselect to avoid unnecessary recalculation
- Can compose complex selectors from simpler ones


## Learning Objectives:

- The purpose of a reducer and the role it plays within your application
- Why a reducer should stay as pure as possible
- Why mutations should not happen within a reducer
- The use of Immutable within the reducer
- The use of Normalizr within the app
- Selectors: what they are and when to use them


## Requirements:

- All your files will be interpreted/compiled on Ubuntu 18.04 LTS using `node 12.x.x` and `npm 6.x.x`
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- All your files should end with a new line
- A `README.md file`, at the root of the folder of the project, is mandatory


## Contributors:

:star: **Lindsey Thomas** | [timidgeek.com]("timidgeek.com/")