import { getMapFromPageConfigs } from '../../../utils/pages/config'
import { ESSAYS_PAGE } from '../../../constants/pages'

export const pageConfigs = [
    {
        id: `music-getting-worse`,
        title: `Music is getting worse`,
        date: { year: 2021, month: 8, day: 22 },
    },
    {
        id: `old-links`,
        title: `Old links`,
        date: { year: 2021, month: 7, day: 31 },
    },
]

export const pagesMap = getMapFromPageConfigs({
    topLevelPage: ESSAYS_PAGE,
    pageConfigs,
})
