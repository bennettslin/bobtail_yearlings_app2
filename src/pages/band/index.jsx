import React from 'react'
import Page from '../../containers/Page'
import Heading from '../../components/Heading'
import { BAND_PAGE } from '../../constants/pages'

const Band = () => (
    <Page {...{ page: BAND_PAGE }}>
        <Heading>Band</Heading>
    </Page>
)

export default Band
