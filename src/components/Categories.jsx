import React from 'react'
import AppContext from '../context';

function Categories() {
    const categories = ['Alle', 'Tasten', 'Gitarren', 'Streicher', 'Bläser', 'Drums'];
    const [activeCategory, setCategoryActive] = React.useState(0);

    const { setCurrentCategory } = React.useContext(AppContext);

    const setCategoriy = (index) => {
        setCategoryActive(index);
        setCurrentCategory(index);
    };

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