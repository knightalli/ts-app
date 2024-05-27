import '../styles/filter-elem.css'
import {ReactElement, useState} from "react";
import {IFilter} from "../interfaces/filter-inferface.tsx";

interface FilterElemProps {
  onFilterChange: (filter: IFilter) => void;
}

const FilterElem = ({ onFilterChange }: FilterElemProps) => {

    const alphabet = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    const alphabetList: ReactElement[] = [];
    const initFilter = {
      idParameter: 'все',
      start: true,
      letter: '',
    }

  const [filter, setFilter] = useState(initFilter);

  alphabet.forEach((letter, index) => {
    alphabetList.push(<option key={index}>{letter}</option>);
    });

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;

    const updatedFilter = { ...filter };

    if (name === 'idParameter') {
      updatedFilter.idParameter = value;
    } else if (name === 'start') {
      updatedFilter.start = value === 'начинается';
    } else if (name === 'letter') {
      updatedFilter.letter = value;
    }

    setFilter(updatedFilter);
    onFilterChange(updatedFilter);
  };

  return (
      <>
        <div className="filter-container">
          <div className='filter-id'>
            <span>По ID</span>
            <select name={'idParameter'} onChange={handleFilterChange}>
              <option>все</option>
              <option>чётные</option>
              <option>нечётные</option>
            </select>
          </div>
          <div className="filter-name">
            <span>Имя</span>
            <select name={'start'} onChange={handleFilterChange}>
              <option>начинается</option>
              <option>не начинается</option>
            </select>
            <span>с буквы</span>
            <select name={'letter'} onChange={handleFilterChange}>
              {alphabetList}
            </select>
          </div>
        </div>
      </>
  )
}
  
  export default FilterElem