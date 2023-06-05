const customMiddleware = (store) => (next) => (action) => {
  if (typeof action == 'function') {
    return action(store.dispatch, store.getState)
  } else {
    if (action.type === 'login/resolved') {
      next({
        type: 'token/setToken',
        payload: { token: action.payload.body.token },
      })

      return next({
        ...action,
        payload: {
          message: action.payload.message,
          status: action.payload.status,
        },
      })
    }
    if (action.type === 'login/logout') {
      next({ type: 'profile/logout' })
      return next({ ...action })
    }
    return next(action)
  }
}

export default customMiddleware
