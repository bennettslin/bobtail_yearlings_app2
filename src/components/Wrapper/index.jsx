import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import './style.scss'

const Wrapper =({ children }) => (
    <div
        {...{
            className: cx(
                'Wrapper',
                'abF'
            )
        }}
    >
        {children}
    </div>
)

Wrapper.propTypes = {
    children: PropTypes.node.isRequired
}

export default Wrapper