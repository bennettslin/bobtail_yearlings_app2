import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import './style.scss'

const Page = ({ children }) => (
    <div
        {...{
            className: cx(
                'Page'
            )
        }}
    >
        {children}
    </div>
)

Page.propTypes = {
    children: PropTypes.node.isRequired
}

export default Page
