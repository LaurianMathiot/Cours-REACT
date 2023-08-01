import Cookies from "js-cookie";
import Header from "../components/Header";

const LoginPage = () => {
  const handleLoginSubmit = async (event) => {
    event.preventDefault();

    const username = event.target.username.value;
    const password = event.target.password.value;

    const loginResponse = await fetch("http://localhost:3010/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ username, password }),
    });

    if (loginResponse.status === 200) {
      const loginData = await loginResponse.json();

      const jwt = loginData.data;
      Cookies.set("jwt", jwt);
    }
  };

  return (
    <>
      <Header />
      <section className="login-section">
        <form onSubmit={handleLoginSubmit}>
          <div className="form-element">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" />
          </div>
          <div className="form-element">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
          </div>
          <input type="submit" className="login-submit-btn btn" />
        </form>
      </section>
    </>
  );
};

export default LoginPage;
