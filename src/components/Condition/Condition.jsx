import React, { useState } from 'react'
import Style from './Condition.module.css'
import { icon as icon_class } from '../Header/Header.module.css'

export default function Condition()
{
    const [ has_condition, setCondition ] = useState(false);

    function toggleCondition()
    {
        setCondition(value => !value);
    }

    function getConditionButton()
    {
        if (has_condition)
            return (<div className={Style.condition_button}>
                <div onClick={toggleCondition} style={ { backgroundImage: "url(./assets/icons/close.png)" } } className={icon_class}></div>
                <input type="date" />
                <input type="time" />
            </div>);
        else
            return (<div onClick={toggleCondition} className={Style.condition_button}>
                <div style={ { backgroundImage: "url(./assets/icons/bell.png)" } } className={icon_class}></div>
                <p>Condição</p>
            </div>);
    }

    return (<div className={Style.condition_container}> {getConditionButton()} </div>);
}