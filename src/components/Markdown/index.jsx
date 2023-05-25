import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import ReactMarkdown from 'react-markdown'
import Anchor from '../Anchor'
import Heading from '../Heading'
import Paragraph from '../Paragraph'
import { getFormattedText } from '../../utils/format'
import './style'

const Markdown = ({
    fontSize = 'sm',
    children,
}) => (
    <ReactMarkdown
        {...{
            className: cx(
                'Markdown',
                fontSize === 'sm' && 'fontSize__sm',
                fontSize === 'md' && 'fontSize__md',
            ),
            components: {
                a: Anchor,
                h1: ({ children }) => (
                    <Heading>{children}</Heading>
                ),
                h3: ({ children }) => (
                    <Heading {...{ level: 3 }}>{children}</Heading>
                ),
                h5: ({ children }) => (
                    <Heading {...{ level: 5 }}>{children}</Heading>
                ),
                p: Paragraph,
            },
        }}
    >
        {getFormattedText(children)}
    </ReactMarkdown>
)

Markdown.propTypes = {
    fontSize: PropTypes.oneOf(['sm', 'md']),
    children: PropTypes.string.isRequired,
}

export default Markdown
