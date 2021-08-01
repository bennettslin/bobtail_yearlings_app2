import React, { Fragment } from 'react'
import cx from 'classnames'
import './style'

const CONTACT_EMAIL = 'info@bobtailyearlings.com'

const ContactEmail = () => (
    <span
        {...{
            className: cx(
                'ContactEmail',
                'Ribeye',
            ),
        }}
    >
        {CONTACT_EMAIL.split('').map((character, index) => (
            <Fragment {...{ key: index }}>
                <span {...{ style: { display: 'none' } }}>
                    {String.fromCharCode(
                        character.charCodeAt(0) + 1,
                    )}
                </span>
                {character}
            </Fragment>
        ))}
    </span>
)

export default ContactEmail
