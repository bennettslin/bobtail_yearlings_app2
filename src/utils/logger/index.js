import { sendToGaFromLog } from './helpers/analytics'
import { getTimeDifference } from './helpers/time'

import {
    EVENT,
    MOUNT,
    SERVE,
    ERROR,
    getStyleForCategory,
} from './helpers/styles'

const _log = ({
    log,
    styles,
    level = 'info',
    category,
    styleCategory,
    action,
    label,
    value,
    useTimeForValue,

}) => {
    const timeDifference = getTimeDifference()

    if (log) {
        console[level](
            `%c${log}`,
            styles || getStyleForCategory({
                category: styleCategory || category,
                action,
            }),
            timeDifference
        )
    }

    sendToGaFromLog({
        category,
        action,
        label,
        value: parseInt(
            useTimeForValue ?
                // Send to analytics as milliseconds.
                timeDifference * 1000 :
                value
        ),
    })
}

export const logEvent = ({
    componentName,
    e: { type },
    analyticsIdentifier,
}) => {
    _log({
        log: `Event "${type}" from ${componentName}.`,
        category: EVENT,
        ...Boolean(analyticsIdentifier) && {
            action: type,
            label: `${componentName} ${analyticsIdentifier}`,
        },
    })
}
export const logMount = (componentName) => {
    _log({
        log: `${componentName} mounted.`,
        styleCategory: MOUNT,
        category: 'lifecycle',
        action: MOUNT,
        label: componentName,
        useTimeForValue: true,
    })
}
export const logServe = (log, props) => {
    _log({
        log,
        category: SERVE,
        useTimeForValue: true,
        ...props,
    })
}
export const logError = ({
    log,
    ...props
}) => {
    _log({
        log,
        category: ERROR,
        ...props,
    })
}
