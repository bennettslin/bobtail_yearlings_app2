import React, { useState } from 'react'
import cx from 'classnames'

import Anchor from '../../components/Anchor'
import Image from '../../modules/Image'

import albumLink from '../../assets/images/albumLink.png'

import './style.scss'

const Home = () => {

    // Only show the entire component when the image asset is loaded.
    const [isShown, setIsShown] = useState(false)

    return (
        <Anchor
            {...{
                className: cx(
                    'AlbumLink',
                    isShown && 'AlbumLink__shown',
                    'responsive__pageChild'
                ),
                href: 'https://www.yearlingsbobtail.com'
            }}
        >
            <Image
                {...{
                    className: cx(
                        'AlbumLink__image'
                    ),
                    src: albumLink,
                    onLoad: () => {
                        setIsShown(true)
                    }
                }}
            />
            <div
                {...{
                    className: cx(
                        'AlbumLink__caption'
                    )
                }}
            >
                <div
                    {...{
                        className: cx(
                            'AlbumLink__newWebcomic'
                        )
                    }}
                >
                    our new audio webcomic
                </div>
                <div
                    {...{
                        className: cx(
                            'AlbumLink__yearlingsBobtail',
                            'Rancho'
                        )
                    }}
                >
                    <em>{`Yearling's Bobtail`}</em>
                </div>
            </div>
        </Anchor>
    )
}

export default Home
