export const getMapFromPageConfigs = ({
    topLevelPage,
    pageConfigs,

}) => (
    pageConfigs.reduce((map, page) => {
        map[page.id] = {
            topLevelPage,
            pages: pageConfigs,
            ...page,
        }

        return map
    }, {})
)

export const getPagePathFromConfig = ({
    topLevelPage,
    id,
    date: {
        year,
        month,
        day,
    } = {},
    subpath,
}) => [
    topLevelPage && `${topLevelPage}/`,
    subpath && `${subpath}/`,
    year && `${year}/`,
    month && `${month}-`,
    day && `${day}-`,
    id && `${id}`,
].filter(segment => Boolean(segment)).join('')
