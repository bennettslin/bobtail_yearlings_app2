import React from 'react'
import cx from 'classnames'

import Page from '../../containers/Page'
import AlbumLink from '../../components/AlbumLink'
import MailingList from '../../components/MailingList'

import './style.scss'

const Home = () => (
    <Page
        {...{
            className: cx(
                'Home'
            ),
        }}
    >
        <AlbumLink />
        <MailingList />
    </Page>
)

export default Home
