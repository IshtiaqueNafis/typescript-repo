import React from 'react';
import {Reminder} from "../models/reminder";


interface ReminderListProps {
    items: Reminder[]
    onRemoveReminder: (id: number) => void
}

const ReminderList = ({items, onRemoveReminder}: ReminderListProps) => {
    return (
        <ul className={'list-group'}>
            {items.map(item => <li className={'list-group-item'} key={item.id}>
                <button className={'btn btn-danger'} onClick={() => onRemoveReminder(item.id)}>Delete</button>
            </li>)}
        </ul>
    );
};

export default ReminderList;
