import React from 'react'
import cx from 'classnames'
import Page from '../../containers/Page'
import AlbumLink from '../../components/AlbumLink'
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
    </Page>
)

export default Home
