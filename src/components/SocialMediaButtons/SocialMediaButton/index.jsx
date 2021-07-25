import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Button from '../../Button'
import './style'

const SocialMediaButton = forwardRef(({
    className,
    id,
    children,
    ...rest
}, ref) => {
    return (
        <Button
            {...{
                ref,
                className: cx(
                    'SocialMediaButton',
                    className,
                ),
                gaLabel: `SocialMediaButton: ${id}`,
                ...rest,
            }}
        >
            {children}
        </Button>
    )
})

SocialMediaButton.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string.isRequired,
    handleButtonClick: PropTypes.func,
    children: PropTypes.node.isRequired,
}

export default SocialMediaButton
