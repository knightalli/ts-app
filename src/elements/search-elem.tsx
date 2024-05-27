import '../styles/search-elem.css'

const SearchElem = ({ onSearchChange }: { onSearchChange: (search: string) => void }) => {

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onSearchChange(event.target.value);
    };

    return (
      <>
        <div className="search-container">
          <input className="search" type="text" onChange={handleSearchChange} placeholder="Введите имя или почту" />
        </div>
      </>
    )
  }
  
  export default SearchElem