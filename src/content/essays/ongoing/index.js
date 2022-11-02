import { getMapFromPageConfigs } from '../../../utils/pages/config'
import { ESSAYS_PAGE } from '../../../constants/pages'

export const pageConfigs = [
    {
        id: `our-mission-and-principles`,
        title: `Our mission and principles`,
        subpath: `ongoing`,
    },
    {
        id: `five-vowels-of-historical-consequence`,
        title: `Five vowels of historical consequence`,
        subpath: `ongoing`,
    },
]

export const pagesMap = getMapFromPageConfigs({
    topLevelPage: ESSAYS_PAGE,
    pageConfigs,
})
