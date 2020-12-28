const Navbar = () => {  
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img
            src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg"
            alt=""
            width="30"
            height="24"
            className="d-inline-block align-middle mx-2"
          />
          Bootstrap
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
