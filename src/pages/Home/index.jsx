import React from 'react'
import cx from 'classnames'

import Page from '../../components/Page'
import Anchor from '../../components/Anchor'
import Image from '../../components/Image'
import MailingList from '../../components/MailingList'

import example from '../../assets/images/example.jpg'

import './style.scss'

const Home = () => (
    <Page
        {...{
            className: cx(
                'Home'
            )
        }}
    >
        <Anchor
            {...{
                className: cx(
                    'YBLink'
                ),
                href: 'https://www.yearlingsbobtail.com'
            }}
        >
            <Image
                {...{
                    className: cx(
                        'YBImage'
                    ),
                    src: example
                }}
            />
            <div
                {...{
                    className: cx(
                        'YBImage__text',
                        'Rancho'
                    )
                }}
            >
                Our new audio webcomic!
            </div>
        </Anchor>
        <MailingList />
    </Page>
)

export default Home
