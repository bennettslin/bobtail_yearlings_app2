import React from 'react'
import PropTypes from 'prop-types'
import Body from '../Body'
import Markdown from '../../../components/Markdown'

const MarkdownBody = ({
    children,
}) => (
    <Body>
        <Markdown>
            {children}
        </Markdown>
    </Body>
)

MarkdownBody.propTypes = {
    children: PropTypes.string.isRequired,
}

export default MarkdownBody
