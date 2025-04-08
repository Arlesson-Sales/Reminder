import React from 'react';
import Style from './Header.module.css'

/**
 * Recebe e percorre um array de objetos que representam as opções do cabeçalho, retornando assim os
 * elementos já devidamente formatados.
 * 
 * @param {Array<Object>} options vetor de opções.
 * @returns {React.JSX.Element[]}
 */
function getOptions(options)
{
    return options?.map((option, index) => {
        return (<p key={index} onClick={option.event} >{option.name}</p>)
    })
}

/**
 * Recebe e percorre um array de objetos que possuem as informações sobre icones do cabeçalho criando 
 * e retornando esse elementos já formatados e com seus eventos aplicados.
 * 
 * @param {Array<Object>} icons vetor de objetos icons.
 * @returns {React.JSX.Element[]}
 */
function getIcons(icons)
{
    return icons?.map((icon, index) => {
        const icon_image = { backgroundImage: `url(./Reminder/assets/icons/${icon.name}.png)` }
        return (<div key={index} onClick={icon.event} style={icon_image} className={Style.icon}></div>)
    })
}

/**
 * Componente usando como cabeçalho padrão de todas as rotas da aplicação. Ao invocar esse componente é possivel passar para ele
 * alguns objetos de configuração como:
 * 
 * @title é um objeto que define o titulo principal do cabeçalho, ele possui as propriedades name que contém a string de título, 
 * event que pode conter uma callback que será executada ao clikar no título. Também possui uma chamada icon onde é possivel passar
 * um objeto com informações do icone que será exibido antes do título.
 * 
 * @icons é um vetor de objetos icons, esses objetos tem duas propriedades; Name que terá o nome do icone a ser renderizado e 
 * event que contém uma função callback para ser chamada ao clikar no icone.
 * 
 * @options similar ao icons com a pequena diferença que serão opções textuais exibidas a direita do título.
 * 
 * @param {Object} props propriedades do componente.
 * @returns {React.JSX.Element}
 */
export default function Header(props)
{
    return (<header className={Style.header_container}>
        <div className={Style.title_container}>
            <div onClick={props.title.icon.event} style={ { backgroundImage: `url(/Reminder/assets/icons/${props.title.icon.name}.png)` } } className={Style.icon}></div>
            <p onClick={props.title.event} >{props.title.name}</p>
        </div>
        <div className={Style.options_container}>{getOptions(props.options)}</div>
        { /* O container de icones só é renderizado caso sejam passdos icones. */ }
        { props.icons ? <div className={Style.icons_container}>{getIcons(props.icons)}</div> : null }
    </header>);
}