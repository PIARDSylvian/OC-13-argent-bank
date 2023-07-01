const customMiddleware = (store) => (next) => (action) => {
  if (typeof action == 'function') {
    return action(store.dispatch, store.getState)
  } else {
    if (action.type === 'login/resolved') {
      sessionStorage.setItem('token', action.payload.body.token) // add session storage

      return next({
        ...action,
        payload: {
          message: action.payload.message,
          status: action.payload.status,
        },
      })
    }
    if (action.type === 'login/logout') {
      sessionStorage.clear() // remove session storage
      next({ type: 'profile/logout' })
      return next({ ...action })
    }
    return next(action)
  }
}

export default customMiddleware
