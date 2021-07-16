import { getEncodedUrl, HOME_PAGE } from '../../constants/pages'

const capitalise = str => (
    str[0].toUpperCase() + str.substring(1)
)

export const getMetaTitle = page => (
    `${page === HOME_PAGE ? '' : `${capitalise(page)} | `}Bobtail Yearlings`
)

export const getMetaDescription = () => (
    'Website for the band Bobtail Yearlings.'
)

const getDefaultConfig = () => ({
    'description': getMetaDescription(),
})

const getFacebookConfig = page => ({
    'og:url': getEncodedUrl(page),
    'og:type': 'website',
    'og:title': getMetaTitle(page),
    'og:description': getMetaDescription(),
    'og:image': getEncodedUrl(`share/image/facebook_image/promo.jpg`),
})

const getTwitterConfig = page => ({
    'twitter:card': 'summary',
    'twitter:site': '@BobtailYearling',
    'twitter:title': getMetaTitle(page),
    'twitter:description': getMetaDescription(),
    'twitter:image':
        getEncodedUrl(`share/image/twitter_thumbnail/promo.jpg`),
})

const spreadHelmetConfig = ({ config, nameKey }) => (
    Object.keys(config).map(key => ({
        [nameKey]: key,
        content: config[key],
    }))
)

export const getMetaTags = page => ([
    ...spreadHelmetConfig({
        config: {
            ...getDefaultConfig(),
            ...getTwitterConfig(page),
        },
        nameKey: 'name',
    }),
    ...spreadHelmetConfig({
        config: getFacebookConfig(page),
        nameKey: 'property',
    }),
])
