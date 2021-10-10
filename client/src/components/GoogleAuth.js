import React from "react";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId:
          "982107182769-bpjvj896vn60jtuubbjiu161a62mfe1v.apps.googleusercontent.com",
        scope: "email",
      });
    });
  }

  render() {
    return <div> Google Auth</div>;
  }
}

export default GoogleAuth;
