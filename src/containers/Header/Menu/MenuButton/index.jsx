import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Button from '../../../../components/Button'
import './style'

const MenuButton = ({ children }) => (
    <Button
        {...{
            className: cx(
                'MenuButton',
                'Rancho',
            ),
        }}
    >
        {children}
    </Button>
)

MenuButton.propTypes = {
    children: PropTypes.string.isRequired,
}

export default MenuButton
