import React from 'react'
import cx from 'classnames'
import Flex from '../Flex'
import FacebookButton from './FollowButton/FacebookButton'
import TwitterButton from './FollowButton/TwitterButton'
import './style'

const FollowButtons = () => (
    <Flex
        {...{
            className: cx(
                'FollowButtons',
            ),
        }}
    >
        <label>Follow us:</label>
        <FacebookButton />
        <TwitterButton />
    </Flex>
)

export default FollowButtons
