function handleLoginFormSubmit(event) {
  event.preventDefault();

  const { username, password } = event.target;

  console.log(`login details:
  Username: ${username.value}
  Password: ${password.value}
  `);

  username.value = "";
  password.value = "";
}

function Login() {
  return (
    <div className="">
      <h2 className="">User Login</h2>
      <div className="">
        <form
          method="post"
          className=""
          onSubmit={(event) => handleLoginFormSubmit(event)}
        >
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <input
              type="checkbox"
              name="remember"
              id="remember"
              className="form-control"
            />
            <label htmlFor="remember" className="form-label">
              remember me
            </label>
          </div>
          <div className="mb-3">
            <button type="submit" className="btn">
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
