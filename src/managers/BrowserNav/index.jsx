import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { updateSelectedPagePath } from '../../redux/page/action'
import { getWindow } from '../../utils/browser'
import { getTrimmedPathname } from '../../utils/gatsby/path'

const BrowserNavManager = () => {
    const dispatch = useDispatch()

    const browseToPathname = pathname => {
        dispatch(updateSelectedPagePath(pathname))
    }

    useEffect(() => {
        getWindow().onpopstate = () => {
            const
                { pathname: rawPathname } = getWindow().location,
                pathname = getTrimmedPathname(rawPathname)

            browseToPathname(pathname)
        }

        return () => {
            getWindow().onpopstate = null
        }
    }, [])

    return null
}

export default BrowserNavManager
