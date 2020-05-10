/* eslint-disable */
import { GA_ACCOUNT } from '../constants/analytics'

if (typeof window !== 'undefined') {

    window.dataLayer = window.dataLayer || []
    function gtag() {
        dataLayer.push(arguments)
    }
    gtag('js', new Date())
    gtag('config', GA_ACCOUNT)
    /* eslint-enable */

    if (typeof ga !== 'undefined') {
        console.log(`GA initialised with property id ${GA_ACCOUNT}.`)
        ga('create', GA_ACCOUNT, 'auto')

    } else {
        console.log('GA did not initialise.')
    }
}
