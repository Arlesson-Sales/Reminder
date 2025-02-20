import React from 'react'
import Style from './Item.module.css'

export default function Item()
{
    return (<div className={Style.Item_list}>
        <input type="checkbox"/>
        <input type="text" placeholder="Adicionar item" />
    </div>)
}