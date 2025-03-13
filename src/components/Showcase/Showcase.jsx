import React from 'react'
import Item from './Item/Item'

function createReminderElements(reminders)
{
    return reminders.map((reminder, index) => {
        return (
            <>
                <Item title={reminder.title} key={index} />
                <div className="default_bar"></div>
            </>
        );
    });
}

export default function Showcase(props)
{
    return (
        <section>
            <ul>
                {createReminderElements(props.reminders)}
            </ul>
        </section>
    );
}