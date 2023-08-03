import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contacts/filtersSlice';
import { selectFilter } from 'redux/contacts/selectors';
import css from  './Filter.module.css'

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  //console.log(filter)

  const handleChange = ({ target: { value } }) => {
    const normalizedValue = value.toLowerCase().trim();
    dispatch(setFilter(normalizedValue));
  };

  return (
<form className={css.decor} >
<div className={css.form_inner}>
  <label>
        <input 
        type="text"
        placeholder="Find contacts by Name"
        value={filter}
        onChange={handleChange} />
    </label>
    </div>
  </form>

    // <label>
    //   <input
    //     type="text"
    //     placeholder="Find contacts by Name"
    //     value={filter}
    //     onChange={handleChange}
    //   />
    // </label>
  );
};
