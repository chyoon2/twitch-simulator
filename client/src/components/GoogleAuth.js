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
        });
    });
  }
  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div>I dont know if we're signed in</div>;
    } else if (this.state.isSignedIn) {
      return <div>I am signed In! </div>;
    } else {
      return <div> I am not signed in</div>;
    }
  }
  render() {
    return <div> {this.renderAuthButton()} </div>;
  }
}

export default GoogleAuth;
