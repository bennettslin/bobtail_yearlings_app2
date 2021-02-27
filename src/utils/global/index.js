import {
    logEvent,
    logMount,
    logServe,
    logError,
} from '../logger'

export const globaliseLogs = () => {
    global.logEvent = logEvent
    global.logMount = logMount
    global.logServe = logServe
    global.logError = logError
}
