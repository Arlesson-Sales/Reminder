import React, { useState, useEffect, useRef } from 'react'
import Style from './Textarea.module.css'
import Condition from '../Condition/Condition'
import Item from '../Item/Item'

/**
 * Essa evento é chamado sempre que algo é digitado na caixa de texto, ele é responsavel
 * por atualizar o tamanho da caixa caso o texto digitado ultrapasse o limite.
 * 
 * @param {Object} event referencia ao objeto de evento.
 */
function textareaDinamicHeight(event)
{
    event.target.style.height = "auto";
    event.target.style.height = String(event.target.scrollHeight) + "px";
}

/**
 * Quando essa função é chamada ela cria uma vetor com componentes Item de acordo com a 
 * quantidade passada como argumento na chamada dessa função.
 * 
 * @param {Number} amount quantidade de elementos Item.
 * @param {Object} last_item_reference objeto gerado pelo hook useRef
 * @param {Function} setAmount referencia a função do useState
 * @returns 
 */
function getItensElements(amount, last_item_reference, setAmount)
{
    const list = [];
    for (let index = 0; index < amount; index++)
    {
        if (index === amount - 1)
            list.push(<Item key={index} ref={last_item_reference} setAmount={setAmount} />);
        else
            list.push(<Item key={index} setAmount={setAmount} />);
    }
    return list;
}

export default function Textzone()
{
    const [ itens_amount, setAmount ] = useState(() => 0);
    const last_item_reference = useRef(null);

    useEffect(() => last_item_reference.current?.focus() , [ itens_amount ]);

    return (<section className={Style.reminder_area}>
        <div className={Style.reminder_title}>
            <p>LEMBRETE</p>
        </div>
        <div className={Style.text_container}>
            <textarea onInput={textareaDinamicHeight}></textarea>
            
            <div className="default_bar"></div>
            <div>
                {getItensElements(itens_amount, last_item_reference, setAmount)}
            </div>

            <input onClick={() => setAmount(value => value + 1)} className="default_button" type="button" value={ itens_amount ? " +  Adicionar item" : "+  Adicionar lista verif." } />
        </div>
        <div className={Style.reminder_title}>
            <p>CONDIÇÂO</p>
        </div>
        <Condition />
    </section>);
}