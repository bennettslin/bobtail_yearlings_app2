import { getMapFromPageConfigs } from '../../../utils/pages/config'
import { ESSAYS_PAGE } from '../../../constants/pages'

export const pageConfigs = [
    {
        id: `the-case-for-yearlings-bobtail`,
        title: `The case for *Yearling's Bobtail*`,
        date: { year: 2023, month: 2 },
    },
    {
        id: `why-todays-music-is-worse-alibis`,
        title: `Why today's music is worse: alibis`,
        date: { year: 2023, month: 2 },
    },
    {
        id: `why-todays-music-is-worse-camps`,
        title: `Why today's music is worse: camps`,
        date: { year: 2023, month: 2 },
    },
    {
        id: `why-todays-music-is-worse-systems`,
        title: `Why today's music is worse: systems`,
        date: { year: 2023, month: 2 },
    },
]

export const pagesMap = getMapFromPageConfigs({
    topLevelPage: ESSAYS_PAGE,
    pageConfigs,
})
