import "./Adminstyle.css";
const AdminLogin = () => {
  return (
    <>
      <div className="main-container">
        <div className="child-container">
          <div className="logo">
            <i className="fa fa-fw fa-user text-white fa-3x" />
          </div>
          <h1>Login Here</h1>
          <hr />
          <div className="row1">
            <div className="col1">
              <label>Username:</label>
              <input
                type="text"
                placeholder="Enter username"
                id="username"
                className="input-field"
              />
            </div>
            <br />
            <div className="col2">
              <label>Password:</label>
              <input
                type="text"
                placeholder="Enter password"
                id="password"
                className="input-field"
              />
            </div>
            <br />
            <br />
            <div className="btn">
              <button type="submit" className="btn1">
                Back
              </button>
              <button type="submit" className="btn1">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
