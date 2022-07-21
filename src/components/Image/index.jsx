import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import Flex from '../Flex'
import './style'

const Image = ({
    className,
    caption,
    isPortrait,
    src,
    onLoad = () => {},

}) => (
    <Flex
        {...{
            flexDirection: 'column',
            alignItems: 'normal',
        }}
    >
        <img
            {...{
                className: cx(
                    'Image',
                    className,
                ),
                ...isPortrait && {
                    style: {
                        width: `66.6%`,
                    },
                },
                src,
                onLoad,
            }}
        />
        {caption && (
            <div
                {...{
                    className: cx(
                        'font__finePrint',
                    ),
                }}
            >
                {caption}
            </div>
        )}
    </Flex>
)

Image.propTypes = {
    className: PropTypes.string,
    caption: PropTypes.string,
    isPortrait: PropTypes.bool,
    src: PropTypes.string.isRequired,
    onLoad: PropTypes.func,
}

export default Image
