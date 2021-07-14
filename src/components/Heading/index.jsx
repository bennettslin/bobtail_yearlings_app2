import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import './style'

const Heading = ({
    children,
}) => (
    <h1
        {...{
            className: cx(
                'Heading',
                'Rancho',
            ),
        }}
    >
        {children}
    </h1>
)

Heading.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Heading
