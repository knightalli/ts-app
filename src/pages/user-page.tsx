function UserPage() {

    return (
      <>
      <div className="user-page-container">
        <div>Стрелка назад</div>
        <div className="user-page-info">
          <div className="user-page-name">
            <p>Имя</p>
          </div>
          <div className="user-page-email">
            <p>Почта</p>
          </div>
          <div className="user-page-avatar">
            <p>Фотография</p>
          </div>          
        </div>
        <button className="button-edit">Отредактировать информацию</button>
      </div>
        
      </>
    )
  }
  
  export default UserPage