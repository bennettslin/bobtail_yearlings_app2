import React from 'react'
import { useSelector } from 'react-redux'
import { Helmet as ReactHelmet } from 'react-helmet'
import { mapSelectedPage } from '../../redux/page/selector'
import {
    getMetaTitle,
    getMetaTags,
} from './helper'

const Helmet = () => {
    const selectedPage = useSelector(mapSelectedPage)

    return (
        <ReactHelmet>
            <title>{getMetaTitle(selectedPage)}</title>
            {getMetaTags(selectedPage).map(({
                name,
                property,
                content,
            }) => (
                <meta
                    {...{
                        key: name || property,
                        ...name && { name },
                        ...property && { property },
                        content,
                    }}
                />
            ))}
        </ReactHelmet>
    )
}

export default Helmet
