import pino from 'pino'
import { sendToGa } from '../../analytics'
import { getTimeDifference } from './time'

import {
    ANALYTICS,
    EVENT,
    MOUNT,
    SERVE,
    ERROR,
    getStyleForCategory
} from './styles'

export const logger = pino()

const _logInfo = ({
    log,
    styles,
    level = 'info',
    category,
    styleCategory,
    action,
    label,
    value,
    useTimeForValue

}) => {
    const
        isGaCall = Boolean(category && action),
        timeDifference = getTimeDifference(),
        finalValue = parseInt(
            useTimeForValue ?
                // Send to analytics as milliseconds.
                timeDifference * 1000 :
                value
        )

    if (log) {
        logger[level](
            `%c${log}`,
            styles || getStyleForCategory({
                category: styleCategory || category,
                isGaCall
            }),
            timeDifference
        )
    }

    if (isGaCall) {
        const didGaSucceed = sendToGa({
            category,
            action,
            label,
            value: finalValue
        })

        if (didGaSucceed) {
            // Log analytics parameters to make data analysis easier.
            logger.info(`%c${`category: ${category}\naction: ${action}${label ? `\nlabel: ${label}` : ''}${finalValue ? `\nvalue: ${finalValue}` : ''}`}`, getStyleForCategory({ category: ANALYTICS }))
        }

    }
}

export const logEvent = ({
    componentName,
    e: { type },
    analyticsIdentifier
}) => {
    _logInfo({
        log: `Event "${type}" from ${componentName}.`,
        category: EVENT,
        ...Boolean(analyticsIdentifier) && {
            action: type,
            label: `${componentName} ${analyticsIdentifier}`
        }
    })
}
export const logMount = (componentName) => {
    _logInfo({
        log: `${componentName} mounted.`,
        styleCategory: MOUNT,
        category: 'lifecycle',
        action: MOUNT,
        label: componentName,
        useTimeForValue: true
    })
}
export const logServe = ({
    log,
    ...props
}) => {
    _logInfo({
        log,
        category: SERVE,
        useTimeForValue: true,
        ...props
    })
}
export const logError = ({
    log,
    ...props
}) => {
    _logInfo({
        log,
        category: ERROR,
        ...props
    })
}
