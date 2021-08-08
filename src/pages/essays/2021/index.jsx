import React from 'react'
import Heading from '../../../components/Heading'
import Anchor from '../../../components/Anchor'
import { heading } from '../../../content/essays/2021/7-31-old-links'

const Essays2021 = () => (
    <>
        <Heading {...{ level: 3 }}>2021</Heading>
        <Anchor {...{ pageLink: 'essays/2021/7-31-old-links' }}>
            {heading}
        </Anchor>
    </>
)

export default Essays2021
