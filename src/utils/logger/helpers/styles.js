const BASE_STYLES = {
    backgroundColor: '#f0ffff',
    color: '#888',
    padding: '6px 8px',
    margin: '2px 0',
    border: '1px solid #bbb',
    borderRadius: '4px',
    fontSize: '1.25em'
}

const GA_STYLE = {
    backgroundColor: '#fffff0'
}

const _getStyles = (styles) => {
    const stylesArray = []

    for (const key in styles) {
        // Change camel case to dashed case.
        const dashedKey =
            key.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`)

        stylesArray.push(`${dashedKey}: ${styles[key]};`)
    }
    return stylesArray.join(' ')
}

export const ANALYTICS = 'analytics'
export const ERROR = 'error'
export const EVENT = 'event'
export const MOUNT = 'mount'
export const SERVE = 'serve'

const LOG_STYLES = {
    [ANALYTICS]: {
        color: '#888',
        fontSize: '0.6em'
    },
    [ERROR]: {
        color: '#b44',
        fontSize: '2em'
    },
    [EVENT]: {
        color: '#8ad',
        fontSize: '0.8em'
    },
    [MOUNT]: {
        color: '#66b',
        fontSize: '1.1em'
    },
    [SERVE]: {
        fontSize: '1.1em'
    }
}

export const getStyleForCategory = ({
    category,
    isGaCall

}) => (
    _getStyles({
        ...category !== ANALYTICS && BASE_STYLES,
        ...LOG_STYLES[category],
        ...isGaCall && GA_STYLE
    })
)
