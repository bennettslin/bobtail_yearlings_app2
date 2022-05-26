import { getMapFromPageConfigs } from '../../../utils/pages/config'
import { ESSAYS_PAGE } from '../../../constants/pages'

export const pageConfigs = [
    // {
    //     id: `tragedy-of-the-risk-averse-middle`,
    //     title: `Tragedy of the risk-averse middle`,
    //     date: { year: 2022, month: 5, day: 15 },
    // },
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
