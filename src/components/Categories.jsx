import React from 'react'

function Categories() {
    const [activeCategory, setCategoryActive] = React.useState(0);
    const categories = ['Alle', 'Tasten', 'Gitarren', 'Streicher', 'Bläser', 'Drums'];

    const setCategoriy = (index) => {
        setCategoryActive(index);
    }

    return (

        <div className='category'>
            {
                <ul>{categories.map(
                    (value, index) => <li key={index} onClick={() => setCategoriy(index)} className={activeCategory === index ? 'active' : ''}>{value}</li>
                )}</ul>
            }
        </div>
    )
}

export default Categories;