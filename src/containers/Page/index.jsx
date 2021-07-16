import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './style'
import Helmet from '../../components/Helmet'

const Page = ({
    children,
}) => (
    <div
        {...{
            className: cx(
                'Page',
            ),
        }}
    >
        <Helmet />
        {children}
    </div>
)

Page.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Page
