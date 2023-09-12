import { getMapFromPageConfigs } from '../../../utils/pages/config'
import { WRITINGS_PAGE } from '../../../constants/pages'

export const pageConfigs = [
    {
        id: `zillow-farewell-message`,
        title: `Zillow farewell message`,
        date: { year: 2022, month: 6 },
    },
    {
        id: `bycombo-placeholder-story`,
        title: `BYCombo placeholder story`,
        date: { year: 2022, month: 5 },
    },
]

export const pagesMap = getMapFromPageConfigs({
    topLevelPage: WRITINGS_PAGE,
    pageConfigs,
})
