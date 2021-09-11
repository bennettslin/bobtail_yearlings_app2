import { getMapFromPages } from '../../../utils/pages'
import { ESSAYS_PAGE } from '../../../constants/pages'

export const pages = [
    {
        id: `old-links`,
        title: `Old links`,
        date: { year: 2021, month: 7, day: 31 },
    },
    {
        id: `music-getting-worse`,
        title: `Music is getting worse`,
        date: { year: 2021, month: 8, day: 22 },
    },
]

export const pagesMap = getMapFromPages({
    rootPage: ESSAYS_PAGE,
    pages,
})
