import { getMapFromPageConfigs } from '../../../utils/pages/config'
import { WRITINGS_PAGE } from '../../../constants/pages'

export const pageConfigs = []

export const pagesMap = getMapFromPageConfigs({
    topLevelPage: WRITINGS_PAGE,
    pageConfigs,
})
