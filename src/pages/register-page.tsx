function RegisterPage() {

    return (
      <>
        <div>
          <form>
            <label>Имя</label>
            <input type="text" placeholder="Введите имя" required />

            <label>Аватар</label>
            <input type="text" placeholder="Вставьте ссылку на аватар" />

            <label>Email</label>
            <input type="email" placeholder="Введите email" required />

            <label>Пароль</label>
            <input type="text" placeholder="Введите пароль" required />
          </form>
        </div>
      </>
    )
  }
  
  export default RegisterPage