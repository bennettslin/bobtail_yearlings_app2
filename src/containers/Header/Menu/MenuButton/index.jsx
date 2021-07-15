import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Button from '../../../../components/Button'
import './style'

const MenuButton = ({ to, children }) => (
    <Button
        {...{
            className: cx(
                'MenuButton',
                'Rancho',
            ),
            to,
        }}
    >
        {children}
    </Button>
)

MenuButton.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
}

export default MenuButton
