import React from 'react'
import classname from 'classnames'

export const Navbar = ({outline,text,onClick}) => {
    return (
        <button onClick={onClick} className={classname('button', {
            'button--outline': outline
        })}>{text}</button>
    )
};