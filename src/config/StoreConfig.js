import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
// import logger from 'redux-logger'
import Config from './DebugConfig'

/*
 * The store configuration file is used to control
 * how stores are created. This is especially useful
 * for adding redux saga and reactotron, as reactotron
 * needs to wrap the store.
 *
 * This configuration set-up also means that we get to
 * easily apply middelware and enhancers all in one place.
 * Fincally it allows for easy implementation of redux persist
 * and combination of reducers in a nice place.
 *
 * Currently sagas have not been implemented because there
 * asynchronous actions are not yet taking place.
 *
 */

import reducers from '../reducers/index'

const configureStore = (rootReducer) => {
    /* ------------ Redux Configuration ------------ */
    const middleware = []
    const enhancers = []

    // if(Config.reduxLogging)
    //   middleware.push(logger)

    enhancers.push(applyMiddleware(...middleware))

    const reducer = rootReducer

    /* ------------ Determine whether to use Reactotron createStore ------------ */

    const createAppropriateStore = Config.useReactotron ? console.tron.createStore : createStore

    /* ------------ Create Store and Persistor ------------ */

    let store = createAppropriateStore(reducer, compose(...enhancers))

    return { store }

}

export default () => configureStore(combineReducers(reducers))
