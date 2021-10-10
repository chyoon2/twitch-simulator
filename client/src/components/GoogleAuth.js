import React from "react";

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "982107182769-bpjvj896vn60jtuubbjiu161a62mfe1v.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          //.init ^ sets off a promise.
          this.auth = window.gapi.auth2.getAuthInstance();
          //get a ref and save it to an instance of this class.
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }
  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  onSignInClick = () => {
    this.auth.signIn();
  };
  onSignOutClick = () => [this.auth.signOut()];

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return;
    } else if (this.state.isSignedIn) {
      return (
        <button className='ui red google button' onClick={this.onSignOutClick}>
          <i className='google icon' /> Log Out
        </button>
      );
    } else {
      return (
        <button className='ui red google button' onClick={this.onSignInClick}>
          <i className='google icon' /> Log in
        </button>
      );
    }
  }
  render() {
    return <div> {this.renderAuthButton()} </div>;
  }
}

export default GoogleAuth;
