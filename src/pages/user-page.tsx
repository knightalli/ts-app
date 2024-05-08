function UserPage() {

    return (
      <>
      <div className="user-page-container">
        <div>Стрелка назад</div>
        <div className="user-page-info">
          <div className="user-page-name">
            <p>Имя</p>
            <input type="text" placeholder="Введите своё имя" />
          </div>
          <div className="user-page-email">
            <p>Почта</p>
            <input type="text" placeholder="Введите свой e-mail" />
          </div>
          <div className="user-page-avatar">
            <p>Фотография</p>
            <input type="text" placeholder="Вставьте ссылку на аватар" />
          </div>          
        </div>
        <button className="button-edit">Отредактировать информацию</button>
      </div>
        
      </>
    )
  }
  
  export default UserPage