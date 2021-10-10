import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

class GoogleAuth extends React.Component {
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
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }
  onAuthChange = (isSignedIn) => {
    // this.setState({ isSignedIn: this.auth.isSignedIn.get() });
    //this callback gets called with a bool, so you can call 'this.auth.isSignedIn.listen(fxn) and it will return a bool to that fxn. so here we add an arg that is a bool
    if (isSignedIn) {
      this.props.signIn();
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };
  onSignOutClick = () => [this.auth.signOut()];

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return;
    } else if (this.props.isSignedIn) {
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
const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signOut, signIn })(GoogleAuth);
