import map2021 from './2021/map'
import { getMarkdownLinkFromDate } from '../../utils/format/markdown'
import { ESSAYS_PAGE } from '../../constants/pages'

const map = {
    ...map2021,
}

export const getMarkdownLinkFromEssayDate = ({ year, month, day }) => (
    getMarkdownLinkFromDate({
        map,
        root: ESSAYS_PAGE,
        year,
        month,
        day,
    })
)
