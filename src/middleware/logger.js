export const customLogger = (store) => (next) => (action) => {
    if(!action.type) {
        return next(action)
    }
    console.log('type', action.type)
    console.log('payload', action.payload)
    console.log('currentState', store.getState())

    next(action)
    // next(action) will continue redux proccess allowing state change then run the next code syncronously
    console.log('next state', store.getState())
}