import React from 'react'
import Style from './Textarea.module.css'

function textareaDinamicHeight(event)
{
    event.target.style.height = "auto";
    event.target.style.height = String(event.target.scrollHeight) + "px";
}

export default function Textzone()
{
    return (<section className={Style.reminder_area}>
        <div className={Style.reminder_title}>
            <p>LEMBRETE</p>
        </div>
        <div className={Style.text_container}>
            <textarea onInput={textareaDinamicHeight}></textarea>
            <div className="default_bar"></div>
            <input className="default_button" type="button" value="+ Adicionar lista verif." />
        </div>
        <div className={Style.reminder_title}>
            <p>CONDIÇÂO</p>
        </div>
        <div className={Style.condition_container}>
            <input type="date" />
            <input type="time" />
        </div>
    </section>);
}