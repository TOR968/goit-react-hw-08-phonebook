import { useSelector, useDispatch } from 'react-redux';

import { filterContact } from '../../redux/phonebook/phonebook-action';
import { filter } from '../../redux/phonebook/phonebook-selectors';
import { FilterLabel, FilterInput } from './FilterStyles';

const Filter = () => {
  const dispatch = useDispatch();
  const filterBy = useSelector(filter);

  const changeFilterName = e => dispatch(filterContact(e.target.value));

  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput
        value={filterBy}
        onChange={changeFilterName}
        type="text"
        placeholder="Enter name"
      />
    </FilterLabel>
  );
};

export default Filter;
