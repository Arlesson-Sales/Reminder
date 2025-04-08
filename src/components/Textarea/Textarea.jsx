import React, { useState, useEffect, useRef } from 'react'
import Style from './Textarea.module.css'
import Condition from './Condition/Condition'
import Item from './Item/Item'

/**
 * Essa função é sempre chamada no evento de digitação dentro da área de texto pois ele verifica se a 
 * quantidade de letras digitas já passou do tamanho da zona para poder aumentar sua altura.
 * 
 * @param {HTMLTextAreaElement} textarea referencia ao elemento HTMl da textarea.
 * @param {Object} reminder referencia ao lembrente atual que esta sendo criado.
 */
function updateTextarea(textarea ,reminder)
{
    reminder.title = textarea.value;
    textarea.style.height = "auto";
    textarea.style.height = String(textarea.scrollHeight) + "px";
}

/**
 * Quando essa função é chamada ela cria uma vetor com componentes Item de acordo com a 
 * quantidade passada como argumento na chamada dessa função.
 * 
 * @param {Number} amount quantidade de elementos Item.
 * @param {Object} last_item_reference objeto gerado pelo hook useRef
 * @param {React.Dispatch<React.SetStateAction<number>>} setAmount referencia a função do useState
 * @returns {React.JSX.Element}
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

/**
 * Esse componente representa a área de digitação do texto do lembrente. Ela está contida dentro do
 * editor de lembrentes.
 * 
 * @param {Object} props 
 * @returns 
 */
export default function Textzone(props)
{
    const [ itens_amount, setAmount ] = useState(() => 0);
    const last_item_reference = useRef(null);
    const itens_container = useRef(null);

    useEffect(() => {
        props.reminder.container = itens_container.current;
        last_item_reference.current?.focus();

    }, [ itens_amount ]);

    return (<section className={Style.reminder_area}>
        <div className={Style.reminder_title}>
            <p>LEMBRETE</p>
        </div>
        <div className={Style.text_container}>
            <textarea onInput={ event => updateTextarea(event.target, props.reminder)}></textarea>
            
            <div className="default_bar"></div>
            <div ref={itens_container}>
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