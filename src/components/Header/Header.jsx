import React from 'react';
import Style from './Header.module.css'

function getOptions(options)
{
    return options?.map((option, index) => {
        return (<p key={index} onClick={option.event} >{option.name}</p>)
    })
}

function getIcons(icons)
{
    return icons?.map((icon, index) => {
        const icon_image = { backgroundImage: `url(/assets/icons/${icon.name}.png)` }
        return (<div key={index} onClick={icon.event} style={icon_image} className={Style.icon}></div>)
    })
}

export default function Header(props)
{
    return (<header className={Style.header_container}>
        <div className={Style.title_container}>
            <div onClick={props.title.icon.event} style={ { backgroundImage: `url(/Reminder/assets/icons/${props.title.icon.name}.png)` } } className={Style.icon}></div>
            <p onClick={props.title.event} >{props.title.text}</p>
        </div>
        <div className={Style.options_container}>{getOptions(props.options)}</div>
        { /* O container de icones só é renderizado caso sejam passdos icones. */ }
        { props.icons ? <div className={Style.icons_container}>{getIcons(props.icons)}</div> : null }
    </header>);
}