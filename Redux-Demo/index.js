const redux = require("redux")
const createStore = redux.createStore
const combineReducers = redux.combineReducers
const reduxLogger = require('redux-logger')

const applyMiddleware  = redux.applyMiddleware
const logger = reduxLogger.createLogger()

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM ='BUY_ICECREAM'

function buyCake() {
    return {
        type: BUY_CAKE
        // info: 'First redux action'
    }
}
function buyIcream() {
    return {
        type: BUY_ICECREAM
        // info: 'Second redux action'
    }
}

const initialCakeState = {
    numOfCakes : 10,

}
const initialIcecreamState = {
    numOfIceCream : 20
}
const iceCreamReducer = (state = initialIcecreamState,action) => {
    switch(action.type) {
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCream: state.numOfIceCream -1
        }
    
        default: return state
    }
}

const cakeReducer = (state = initialCakeState,action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes -1
        }

        default: return state
    }
}

const rootReducer = combineReducers({
    a: cakeReducer,
    b: iceCreamReducer
})
const store = createStore(rootReducer,applyMiddleware(logger))

console.log('Initial state',store.getState())
const unsubscribe = store.subscribe(()=> {})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIcream())
store.dispatch(buyIcream())
store.dispatch(buyIcream())
store.dispatch(buyIcream())
store.dispatch(buyIcream())


unsubscribe()

