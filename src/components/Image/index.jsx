import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

import './style.scss'

const Image = ({
    className,
    src
}) => (
    <img
        {...{
            className: cx(
                'Image',
                className
            ),
            src
        }}
    />
)

Image.propTypes = {
    className: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
}

export default Image
