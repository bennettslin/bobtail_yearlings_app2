import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Helmet from '../../components/Helmet'
import './style'

const Page = ({
    isWide,
    children,
}) => (
    <div
        {...{
            className: cx(
                'Page',
                isWide ?
                    'Page__wide' :
                    'Page__narrow',
            ),
        }}
    >
        <Helmet />
        {children}
    </div>
)

Page.propTypes = {
    isWide: PropTypes.bool,
    children: PropTypes.node.isRequired,
}

export default Page
