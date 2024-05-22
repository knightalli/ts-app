function LoginPage() {



    return (
      <>
        <div>
          <form>
            <label>Email</label>
            <input type="text" placeholder="Введите email" required />

            <label>Пароль</label>
            <input type="text" placeholder="Введите пароль" required />
          </form>
        </div>
      </>
    )
  }
  
  export default LoginPage