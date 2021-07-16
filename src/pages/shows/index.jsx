import React from 'react'
import Page from '../../containers/Page'
import Heading from '../../components/Heading'
import { SHOWS_PAGE } from '../../constants/pages'

const Shows = () => (
    <Page {...{ page: SHOWS_PAGE }}>
        <Heading>Shows</Heading>
    </Page>
)

export default Shows
