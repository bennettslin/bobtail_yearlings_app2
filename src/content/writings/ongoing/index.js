import { getMapFromPageConfigs } from '../../../utils/pages/config'
import { WRITINGS_PAGE } from '../../../constants/pages'

export const pageConfigs = [
    {
        id: `our-mission-principles-and-terms`,
        title: `Our mission, principles, and terms`,
        subpath: `ongoing`,
        date: { year: 2024, month: 8, updated: true },
    },
]

export const pagesMap = getMapFromPageConfigs({
    topLevelPage: WRITINGS_PAGE,
    pageConfigs,
})
