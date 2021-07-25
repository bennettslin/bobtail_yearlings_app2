import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import ReactMarkdown from 'react-markdown'
import './style'

const Markdown = ({
    children,
}) => (
    <ReactMarkdown
        {...{
            className: cx(
                'Markdown',
            ),
        }}
    >
        {children}
    </ReactMarkdown>
)

Markdown.propTypes = {
    children: PropTypes.string.isRequired,
}

export default Markdown
