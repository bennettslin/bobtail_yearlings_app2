import React from 'react'
import cx from 'classnames'

import Anchor from '../../components/Anchor'
import Image from '../../components/Image'

import example from '../../assets/images/example.jpg'

import './style.scss'

const Home = () => (
    <Anchor
        {...{
            className: cx(
                'AlbumLink',
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
                src: example
            }}
        />
        <div
            {...{
                className: cx(
                    'AlbumLink__text',
                    'Rancho'
                )
            }}
        >
            Our new audio webcomic!
        </div>
    </Anchor>
)

export default Home
