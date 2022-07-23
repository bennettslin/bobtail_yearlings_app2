import horses from './horses'
import { getMergedStyles } from '../../utils/svgs'

export default {
    className: 'logo',
    styles: getMergedStyles([
        horses,
    ]),
}
