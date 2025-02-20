import React, { useState } from 'react'
import Style from './Textarea.module.css'
import Condition from '../Condition/Condition'
import Item from '../Item/Item'

function textareaDinamicHeight(event)
{
    event.target.style.height = "auto";
    event.target.style.height = String(event.target.scrollHeight) + "px";
}

function getItensElements(amount)
{
    const list = [];
    for (let index = 0; index < amount; index++)
        list.push(<Item key={index} />);
    return list;
}

export default function Textzone()
{
    const [ itens_amount, setAmount ] = useState(0);

    return (<section className={Style.reminder_area}>
        <div className={Style.reminder_title}>
            <p>LEMBRETE</p>
        </div>
        <div className={Style.text_container}>
            <textarea onInput={textareaDinamicHeight}></textarea>
            
            <div className="default_bar"></div>
            {getItensElements(itens_amount)}

            <input onClick={() => setAmount(value => value + 1)} className="default_button" type="button" value={ itens_amount ? " +  Adicionar item" : "+  Adicionar lista verif." } />
        </div>
        <div className={Style.reminder_title}>
            <p>CONDIÇÂO</p>
        </div>
        <Condition />
    </section>);
}