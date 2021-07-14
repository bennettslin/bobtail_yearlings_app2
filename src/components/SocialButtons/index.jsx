import React, { useState } from 'react'
import cx from 'classnames'
import * as EmailValidator from 'email-validator'

import {
    EMAIL_ACTION,
    EMAIL_NAME,
    EMAIL_DUMMY_NAME,
    EMAIL_ID,
} from '../../constants/website'

import './style.scss'

const SocialButtons = () => {
    const
        [isValidEmail, setIsValidEmail] = useState(false),
        [emailValue, setEmailValue] = useState('')

    const onFocus = () => {
        logEvent(
            'SocialButtons',
            'email'
        )
    }

    const onClick = () => {
        logEvent(
            'SocialButtons',
            'submit'
        )
    }

    const onChange = ({ target: { value } }) => {
        const emailValue = value.replace(' ', '')

        setIsValidEmail(EmailValidator.validate(emailValue))
        setEmailValue(emailValue)
    }

    return (
        <form
            noValidate
            {...{
                className: cx(
                    'SocialButtons',
                ),
                action: EMAIL_ACTION,
                method: 'post',
                target: '_blank',
            }}
        >
            <label
                {...{
                    className: cx(
                        'SocialButtons__label',
                        'Rancho'
                    ),
                }}
            >
                Mailing List
            </label>
            <div
                {...{
                    className: cx(
                        'SocialButtons__inputs'
                    ),
                }}
            >
                <input
                    required
                    {...{
                        className: cx(
                            'SocialButtons__emailField',
                            'SocialButtons__input',
                            'PtSansNarrow'
                        ),
                        id: EMAIL_ID,
                        name: EMAIL_NAME,
                        type: 'text',
                        value: emailValue,
                        placeholder: 'Email address',
                        autoComplete: 'off',
                        maxLength: 254,
                        onFocus,
                        onChange,
                    }}
                />
                {/* Honeypot field to prevent bot signups. */}
                <div
                    {...{
                        style: {
                            position: 'absolute',
                            left: '-5000px',
                        },
                        'aria-hidden': true,
                    }}
                >
                    <input
                        {...{
                            name: EMAIL_DUMMY_NAME,
                            type: 'text',
                            defaultValue: '',
                            tabIndex: -1,
                        }}
                    />
                </div>
                <input
                    {...{
                        className: cx(
                            'SocialButtons__submitButton',
                            'SocialButtons__input',
                            'PtSansNarrow'
                        ),
                        type: 'submit',
                        value: 'Sign up!',
                        disabled: !isValidEmail,
                        onClick,
                    }}
                />
            </div>
        </form>
    )
}

export default SocialButtons
