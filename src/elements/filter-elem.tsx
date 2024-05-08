import '../styles/filter-elem.css'

function FilterElem() {

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
            <select>
              {/* тут будет цикл по алфавиту */}
              <option>а</option>
              <option>б</option>
            </select>
          </div>
        </div>
      </>
    )
  }
  
  export default FilterElem