import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import ReactMarkdown from 'react-markdown'
import Body from '../Page/Body'
import Anchor from '../../components/Anchor'
import Heading from '../../components/Heading'
import Paragraph from '../../components/Paragraph'
import './style'

const Markdown = ({
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
                {children}
            </ReactMarkdown>
        </Body>
    </>
)

Markdown.propTypes = {
    children: PropTypes.string.isRequired,
}

export default Markdown
