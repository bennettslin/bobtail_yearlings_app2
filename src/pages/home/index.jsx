import React from 'react'
import Page from '../../containers/Page'
import AlbumLink from '../../components/AlbumLink'
import { HOME_PAGE } from '../../constants/pages'

const Home = () => (
    <Page isWide {...{ page: HOME_PAGE }}>
        <AlbumLink />
    </Page>
)

export default Home
