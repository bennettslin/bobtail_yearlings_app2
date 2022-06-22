import { getMapFromPageConfigs } from '../../../utils/pages/config'
import { ESSAYS_PAGE } from '../../../constants/pages'

export const pageConfigs = [
    {
        id: `farewell-to-zillow`,
        title: `Farewell to Zillow`,
        date: { year: 2022, month: 6, day: 20 },
    },
    {
        id: `original-bycombo-story`,
        title: `Original BYCombo story`,
        date: { year: 2022, month: 5, day: 6 },
    },
]

export const pagesMap = getMapFromPageConfigs({
    topLevelPage: ESSAYS_PAGE,
    pageConfigs,
})
