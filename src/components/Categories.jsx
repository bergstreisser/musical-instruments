import React from 'react'
import AppContext from '../context';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryActive } from '../redux/slices/filterSlice';

function Categories() {
    const categories = ['Alle', 'Tasten', 'Gitarren', 'Streicher', 'Bläser', 'Drums'];

    //const [activeCategory, setCategoryActive] = React.useState(0); 
    const activeCategory = useSelector((state) => state.filterReducer.activeCategory);
    const dispatch = useDispatch();

    const { setCurrentCategory } = React.useContext(AppContext);

    const setCategoriy = (index) => {
        dispatch(setCategoryActive(index))
        //setCategoryActive(index);
        console.log('Test', index);
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