import allPeople from './allPeople'
import bennettLiz from './bennettLiz'
import { getMergedStyles } from '../../utils/svgs'

export default {
    className: 'people',
    styles: getMergedStyles([
        allPeople,
        bennettLiz,
    ]),
}
