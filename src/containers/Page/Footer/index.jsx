import React from 'react'
import cx from 'classnames'
import TopLevelShareRow from './TopLevelShareRow'
import './style'

const PageFooter = () => (
    <div
        {...{
            className: cx(
                'PageFooter',
            ),
        }}
    >
        <TopLevelShareRow />
    </div>
)

export default PageFooter
