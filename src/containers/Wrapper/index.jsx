import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Helmet } from 'react-helmet'
import './style.scss'

const Wrapper = ({ children }) => (
    <div
        {...{
            className: cx(
                'Wrapper',
                'PtSansNarrow'
            ),
        }}
    >
        <Helmet>
            <title>{`Bobtail Yearlings`}</title>
            <meta
                {...{
                    name: 'description',
                    content: 'Website for the band Bobtail Yearlings.',
                }}
            />
        </Helmet>
        {children}
    </div>
)

Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Wrapper
