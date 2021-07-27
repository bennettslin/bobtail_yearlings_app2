import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import ReactMarkdown from 'react-markdown'
import Body from '../Page/Body'
import Anchor from '../../components/Anchor'
import Paragraph from '../../components/Paragraph'
import EssaysLink from '../../components/EssaysLink'
import ShareButtons from '../../components/ShareButtons'
import './style'

const Markdown = ({
    isEssayPage,
    children,
}) => (
    <>
        <Body>
            <ReactMarkdown
                {...{
                    className: cx(
                        'Markdown',
                    ),
                    components: {
                        a: Anchor,
                        p: Paragraph,
                    },
                }}
            >
                {children}
            </ReactMarkdown>
            {isEssayPage && (
                <EssaysLink />
            )}
        </Body>
        {isEssayPage && (
            <ShareButtons />
        )}
    </>
)

Markdown.propTypes = {
    isEssayPage: PropTypes.bool,
    children: PropTypes.string.isRequired,
}

export default Markdown
