import { getInitialGaLog } from '../analytics'

import {
    logEvent,
    logMount,
    logServe,
    logError,
    logger
} from './helpers/logs'

logServe({
    log: `Built ${BUILD_DATE_TIME}.`,
    action: 'load',
    label: BUILD_DATE_TIME
})

logServe({
    log: getInitialGaLog(),
    action: 'ga'
})

global.logEvent = logEvent
global.logMount = logMount
global.logServe = logServe
global.logError = logError

export default logger
