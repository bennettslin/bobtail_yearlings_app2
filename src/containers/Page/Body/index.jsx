import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './style'

const Body = ({ children }) => (
    <div
        {...{
            className: cx(
                'Body',
            ),
        }}
    >
        {children}
    </div>
)

Body.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Body
