import React from "react";
import Login from "./Login";
import Logout from "./Logout";
class HandleLogin extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
    };
  }
  onLoginClick = () => {
    this.setState({ isLoggedIn: true });
  };

  onLogoutClick = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    let element;
    if (this.state.isLoggedIn) {
      element = <Logout displayLogout={this.onLogoutClick} />;
    } else {
      element = <Login displayLogin={this.onLoginClick} />;
    }
    return (
      <div>
        <h2>Handle Login Component</h2>
        {element}

        
      </div>
    );
  }
}
export default HandleLogin;
