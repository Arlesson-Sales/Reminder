import React from 'react'
import Style from './Textarea.module.css'

function textareaDinamicHeight(event)
{
    event.target.style.height = "auto";
    event.target.style.height = String(event.target.scrollHeight) + "px";
}

export default function Textzone()
{
    return (<section>
        <p className={Style.title_text}>LEMBRETE</p>
        <div className={Style.text_container}>
            <textarea onInput={textareaDinamicHeight}></textarea>
        </div>
    </section>);
}