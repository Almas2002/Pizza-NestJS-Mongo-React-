import React, {useState} from 'react'

export const Categories = ({items, onClick}) => {
    const [names, setName] = useState(0);
    return (
        <div className="categories">
            <ul>
                <li onClick={() => setName(0)} className={names === 0 ? 'active' : ''}>Все</li>
                {items && items.map((name, index) => <li onClick={() => setName(name)} className={names === name ? 'active' : ''}
                                                          key={name + index}>{name}</li>)}
            </ul>
        </div>
    )
};