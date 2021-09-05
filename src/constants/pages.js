export const BOBTAIL_YEARLINGS_DOMAIN = `https://www.bobtailyearlings.com`

export const HOME_PAGE = 'home'
export const NOT_FOUND_PAGE = '404'

export const BAND_PAGE = 'band'
export const SHOWS_PAGE = 'shows'
export const ESSAYS_PAGE = 'essays'
export const CONTACT_PAGE = 'contact'
export const LINKS_PAGE = 'links'

export const getPathForPage = page => (
    page === HOME_PAGE ? '/' : `/${page}`
)

export const getUrlForPage = page => {
    const
        pagePath = getPathForPage(page),
        // Include ending forward slash because Twitter warns about redirects.
        finalSlash = page === HOME_PAGE ? '' : '/'

    return `${BOBTAIL_YEARLINGS_DOMAIN}${pagePath}${finalSlash}`
}

export const getUrlForFile = filePath => (
    `${BOBTAIL_YEARLINGS_DOMAIN}${getPathForPage(filePath)}`
)
