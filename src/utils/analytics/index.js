import { GA_ACCOUNT } from '../../constants/analytics'

const isGaUndefined = () => (
    typeof ga === 'undefined'
)

export const getInitialGaLog = () => {
    if (isGaUndefined()) {
        return 'GA did not initialise.'
    } else {
        return `GA initialised with property id ${GA_ACCOUNT}.`
    }
}

export const sendToGa = ({
    category = 'category',
    action = 'action',
    label,
    value

}) => {
    if (isGaUndefined()) {
        return false
    }

    ga('send', {
        hitType: 'event',
        eventCategory: category,
        eventAction: action,
        ...label && { eventLabel: label },
        ...value && { eventValue: value }
    })

    return true
}
