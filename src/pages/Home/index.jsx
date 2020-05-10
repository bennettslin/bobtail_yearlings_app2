import React from 'react'
import cx from 'classnames'

import Page from '../../components/Page'
import AlbumLink from '../../components/AlbumLink'
import MailingList from '../../components/MailingList'

import sendEvent from '../../utils/analytics'

import './style.scss'

const Home = () => {

    sendEvent({
        category: 'lifecycle',
        action: 'mount',
        label: 'Home'
    })

    return (
        <Page
            {...{
                className: cx(
                    'Home'
                )
            }}
        >
            <AlbumLink />
            <MailingList />
        </Page>
    )
}

export default Home
