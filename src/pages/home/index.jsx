import React from 'react'
import Page from '../../containers/Page'
import AlbumLink from '../../components/AlbumLink'

const Component = () => (
    <Page
        {...{
            isWide: true,
            noShare: true,
        }}
    >
        <AlbumLink />
    </Page>
)

export default Component
