const RouteJoin = () => {

    const submitHandler = (e) => {
        e.preventDefault();
        
    }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>ID</label>
        <input type="text" name="id" id="id"/>
        <br />
        <label>PWD</label>
        <input type="password" name="password" id="password"/>
        <br />
        <label>NAME</label>
        <input type="text" name="name" id="name"/>
        <br />
        <label>EMAIL</label>
        <input type="email" name="email" id="email"/>
        <br />
        <input type="submit" value="회원가입" />
      </form>
    </div>
  )
}

export default RouteJoin
