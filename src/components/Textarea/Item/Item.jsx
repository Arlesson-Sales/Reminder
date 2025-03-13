import React from 'react'
import Style from './Item.module.css'

/**
 * Esse evento faz a verificação se o item de lista não possui mais um valor, ou sejá não possui
 * mais nenhum texto, caso sim se o usuario apertar a tecla Backspace ele é removido.
 * 
 * @param {Object} event referencia ao objeto de evento.
 */
function removeItemCheck(event, setAmount)
{
    if (event.key === "Enter")
    {
        setAmount(value => value + 1);
        return;
    }

    if (event.key === "Backspace" && event.target.value === "")
    {
        const parentNode = event.target.parentNode.parentNode;
        parentNode?.children?.[parentNode?.children.length - 2]?.lastChild?.focus?.();
        event.target.parentNode.remove();
        return;
    }
}

export default function Item({ ref, setAmount })
{
    return (<div className={Style.Item_list}>
        <input type="checkbox"/>
        <input ref={ref} onKeyDown={event => removeItemCheck(event, setAmount)} type="text" placeholder="Adicionar item" />
    </div>)
}