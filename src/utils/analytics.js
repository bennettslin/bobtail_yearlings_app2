/* eslint-disable no-inner-declarations */
import { GA_ACCOUNT } from '../constants/analytics'

// Skip on the server side.
if (typeof window !== 'undefined') {

    let intervalId
    let retryLimit = 100

    window.dataLayer = window.dataLayer || []
    function gtag() {
        // eslint-disable-next-line prefer-rest-params
        dataLayer.push(arguments)
    }
    gtag('js', new Date())
    gtag('config', GA_ACCOUNT)

    const initialiseGA = () => {

        if (typeof ga !== 'undefined') {
            console.log(`GA initialised with property id ${GA_ACCOUNT}.`)
            ga('create', GA_ACCOUNT, 'auto')
            clearInterval(intervalId)

        } else if (retryLimit) {
            console.log('GA not found, retrying...')
        } else {
            console.log('GA did not initialise.')
            clearInterval(intervalId)
        }

        retryLimit--
    }

    // Seems to need one to two retries.
    intervalId = setInterval(initialiseGA, 10)
}

const sendEvent = ({
    category = 'category',
    action = 'action',
    label,
    value

}) => {
    if (typeof ga === 'undefined') {
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

export default sendEvent
