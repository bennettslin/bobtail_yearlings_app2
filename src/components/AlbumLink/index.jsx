import React, { useState } from 'react'
import cx from 'classnames'
import Anchor from '../../components/Anchor'
import Image from '../Image'
import albumLink from '../../assets/images/albumLink.png'
import { getSmartQuotedText } from '../../utils/format/smartQuote'
import './style'

const AlbumLink = () => {
    const [key, setKey] = useState(0)

    const onLoad = () => {
        // Hack to force image to load when navigating from other page.
        setKey(key + 1)
    }

    return (
        <Anchor
            {...{
                key,
                className: cx(
                    'AlbumLink',
                ),
                analyticsLabel: 'AlbumLink',
                href: 'https://www.yearlingsbobtail.com',
            }}
        >
            <Image
                {...{
                    className: cx(
                        'AlbumLink__image',
                    ),
                    src: albumLink,
                    onLoad,
                }}
            />
            <div
                {...{
                    className: cx(
                        'AlbumLink__caption',
                    ),
                }}
            >
                <div
                    {...{
                        className: cx(
                            'AlbumLink__newWebcomic',
                        ),
                    }}
                >
                    our audio webcomic
                </div>
                <div
                    {...{
                        className: cx(
                            'AlbumLink__yearlingsBobtail',
                            'font__heading',
                        ),
                    }}
                >
                    <em>{getSmartQuotedText(`Yearling's Bobtail`)}</em>
                </div>
            </div>
        </Anchor>
    )
}

export default AlbumLink
