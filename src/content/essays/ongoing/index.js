import { getMapFromPageConfigs } from '../../../utils/pages/config'
import { ESSAYS_PAGE } from '../../../constants/pages'

export const pageConfigs = [
    {
        id: `our-mission-principles-and-terms`,
        title: `Our mission, principles, and terms`,
        subpath: `ongoing`,
        date: { year: 2023, month: 6, updated: true },
    },
    // {
    //     id: `five-vowels-of-historical-consequence`,
    //     title: `Five vowels of historical consequence`,
    //     subpath: `ongoing`,
    //     date: { year: 2023, month: 1, updated: true },
    // },
]

export const pagesMap = getMapFromPageConfigs({
    topLevelPage: ESSAYS_PAGE,
    pageConfigs,
})
