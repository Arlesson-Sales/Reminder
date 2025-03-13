import React from 'react'
import Style from './Item.module.css'

/**
 * Esse evento faz a verificação se o item de lista não possui mais um valor, ou sejá não possui
 * mais nenhum texto, caso sim se o usuario apertar a tecla Backspace ele é removido.
 * 
 * @param {Object} event referencia ao objeto de evento.
 */
function removeItemCheck(event)
{
    if (event.key === "Backspace" && event.target.value === "")
    {
        const parentNode = event.target.parentNode.parentNode;
        parentNode?.children?.[parentNode?.children.length - 2]?.lastChild?.focus?.();
        event.target.parentNode.remove();
    }
}

export default function Item({ ref })
{
    return (<div className={Style.Item_list}>
        <input type="checkbox"/>
        <input ref={ref} onKeyDown={removeItemCheck} type="text" placeholder="Adicionar item" />
    </div>)
}