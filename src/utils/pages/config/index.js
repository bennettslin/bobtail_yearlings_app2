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
        updated,
    } = {},
    subpath,
}) => [
    topLevelPage && `${topLevelPage}/`,
    subpath && `${subpath}/`,
    !updated && [
        year && `${year}/`,
        month && `${month}/`,
        day && `${day}-`,
    ].filter(value => Boolean(value)).join(''),
    id && `${id}`,
].filter(value => Boolean(value)).join('')
