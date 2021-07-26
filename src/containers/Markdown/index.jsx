import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import ReactMarkdown from 'react-markdown'
import Body from '../Page/Body'
import Paragraph from '../../components/Paragraph'
import EssaysLink from '../../components/EssaysLink'
import './style'

const Markdown = ({
    isEssayPage,
    children,
}) => (
    <Body>
        <ReactMarkdown
            {...{
                className: cx(
                    'Markdown',
                ),
                components: {
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
)

Markdown.propTypes = {
    isEssayPage: PropTypes.bool,
    children: PropTypes.string.isRequired,
}

export default Markdown
