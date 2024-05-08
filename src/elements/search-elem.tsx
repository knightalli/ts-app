import '../styles/search-elem.css'

function SearchElem() {

    return (
      <>
        <div className="search-container">
          <input className="search" type="text" placeholder="Введите имя или почту" />
        </div>
      </>
    )
  }
  
  export default SearchElem