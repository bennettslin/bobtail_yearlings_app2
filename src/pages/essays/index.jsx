import React from 'react'
import Page from '../../containers/Page'
import Heading from '../../components/Heading'
import { ESSAYS_PAGE } from '../../constants/pages'

const Essays = () => (
    <Page {...{ page: ESSAYS_PAGE }}>
        <Heading>Essays</Heading>
    </Page>
)
export default Essays
