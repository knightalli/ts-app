function CabinetPage() {

    return (
      <>
        <div className="cabinet-container">
        <div className="cabinet-info">
          <div className="cabinet-name">
            <p>Имя</p>
            <input type="text" placeholder="Введите своё имя" />
          </div>
          <div className="cabinet-email">
            <p>Почта</p>
            <input type="text" placeholder="Введите свой e-mail" />
          </div>
          <div className="cabinet-avatar">
            <p>Фотография</p>
            <input type="text" placeholder="Вставьте ссылку на аватар" />
          </div>          
        </div>
        <button className="button-edit">Отредактировать информацию</button>
        </div>
      </>
    )
  }
  
  export default CabinetPage