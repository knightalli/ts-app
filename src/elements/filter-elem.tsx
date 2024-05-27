import '../styles/filter-elem.css'
import {ReactElement} from "react";

interface FilterElemProps {
  onFilterChange: (filter: string) => void;
}

const FilterElem = ({ onFilterChange }: FilterElemProps) => {

    const alphabet = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    const alphabetList: ReactElement[] = [];

  alphabet.forEach((letter, index) => {
    alphabetList.push(<option key={index}>{letter}</option>);
    });

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange(event.target.value);
  };

  return (
      <>
        <div className="filter-container">
          <div className='filter-id'>
            <span>По ID</span>
            <select>
              <option>все</option>
              <option>чётные</option>
              <option>нечётные</option>
            </select>
          </div>
          <div className="filter-name">
            <span>Имя</span>
            <select>
              <option>начинается</option>
              <option>не начинается</option>
            </select>
            <span>с буквы</span>
            <select onChange={handleFilterChange}>
              {alphabetList}
            </select>
          </div>
        </div>
      </>
  )
}
  
  export default FilterElem