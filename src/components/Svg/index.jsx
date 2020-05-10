import React from 'react'
import PropTypes from 'prop-types'
import ReactInlineSvg from 'react-inlinesvg'

const propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    src: PropTypes.string.isRequired
}

const Svg = ({
    className,
    style,
    src
}) => (
    <>
        <div
            {...{
                className,
                style
            }}
        >
            <ReactInlineSvg
                {...{
                    xmlns: 'http://www.w3.org/2000/svg',
                    src
                }}
            />
        </div>
    </>
)

Svg.propTypes = propTypes

export default Svg
