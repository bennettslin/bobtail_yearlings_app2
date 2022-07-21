import { getMapFromPageConfigs } from '../../../utils/pages/config'
import { ESSAYS_PAGE } from '../../../constants/pages'

export const pageConfigs = [
    {
        id: `zillow-farewell-message`,
        title: `Zillow farewell message`,
        date: { year: 2022, month: 6, day: 20 },
    },
    {
        id: `bycombo-placeholder-story`,
        title: `BYCombo placeholder story`,
        date: { year: 2022, month: 5, day: 6 },
    },
]

export const pagesMap = getMapFromPageConfigs({
    topLevelPage: ESSAYS_PAGE,
    pageConfigs,
})
