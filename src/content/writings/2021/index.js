import { getMapFromPageConfigs } from '../../../utils/pages/config'
import { WRITINGS_PAGE } from '../../../constants/pages'

export const pageConfigs = [
    {
        id: `old-website-links`,
        title: `Old website links`,
        date: { year: 2021, month: 7 },
    },
]

export const pagesMap = getMapFromPageConfigs({
    topLevelPage: WRITINGS_PAGE,
    pageConfigs,
})
