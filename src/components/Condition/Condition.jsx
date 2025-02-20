import React from 'react'
import Style from './Condition.module.css'
import { icon } from '../Header/Header.module.css'

export default function Condition()
{
    return (<div className={Style.condition_container}>
        <div className={Style.condition_button}>
            <div style={ { backgroundImage: "url(./assets/icons/bell.png)" } } className={icon}></div>
            <p>Condição</p>
        </div>
    </div>);
}