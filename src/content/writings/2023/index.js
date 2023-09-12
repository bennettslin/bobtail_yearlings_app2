import { getMapFromPageConfigs } from '../../../utils/pages/config'
import { WRITINGS_PAGE } from '../../../constants/pages'

export const pageConfigs = [
    {
        id: `revolutions-start-when-theyre-allowed`,
        title: `Revolutions start when they're allowed`,
        date: { year: 2023, month: 3 },
    },
    // {
    //     id: `science-explains-why-todays-rock-is-worse`,
    //     title: `Science explains why today's rock is worse`,
    //     date: { year: 2023, month: 3 },
    // },
    // {
    //     id: `the-case-for-yearlings-bobtail`,
    //     title: `The case for *Yearling's Bobtail*`,
    //     date: { year: 2023, month: 3 },
    // },
]

export const pagesMap = getMapFromPageConfigs({
    topLevelPage: WRITINGS_PAGE,
    pageConfigs,
})
