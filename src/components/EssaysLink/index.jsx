import React from 'react'
import Paragraph from '../Paragraph'
import { useSelector } from 'react-redux'
import Anchor from '../Anchor'
import { mapSelectedPage } from '../../redux/page/selector'
import { ESSAYS_PAGE } from '../../constants/pages'
import './style'

const EssaysLink = () => {
    const selectedPage = useSelector(mapSelectedPage)

    return (
        <Paragraph
            {...{
                className: 'EssaysLink',
            }}
        >
            <Anchor
                {...{
                    pageLink: ESSAYS_PAGE,
                    analyticsLabel: `EssaysLink__${selectedPage}`,
                }}
            >
                back to Essays
            </Anchor>
        </Paragraph>
    )
}

export default EssaysLink
