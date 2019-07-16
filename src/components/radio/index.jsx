import React from 'react'
import './index.scss'
import { guidGenerator } from './utils'

export const Radio = ({ children, id, ...rest }) => {
    if (!id) {
        id = guidGenerator()
    }

    return (
        <label className="radio" htmlFor={id}>
            <span>{children}</span>
            <input id={id} {...rest} type="radio" />
            <div className="radio-border" />
        </label>
    )
}
