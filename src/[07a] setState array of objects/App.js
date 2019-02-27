import React from "react";

import Cookie from "./Cookie";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCookieId: 0,
      cookies: [
        { id: 1, eaten: false },
        { id: 2, eaten: false },
        { id: 3, eaten: false }
      ]
    };
  }

  selectCookie = cookieId => {
    this.setState({ selectedCookieId: cookieId });
  };

  eatCookie = cookieId => {
    //todo...
  };

  render() {
    return (
      <div>
        <h1>Example 7: setState for array of objects</h1>
        {this.state.selectedCookieId}
        <br />
        {this.state.cookies.map(cookie => (
          <Cookie
            key={cookie.id}
            cookie={cookie}
            selectCookie={this.selectCookie}
            eatCookie={this.eatCookie}
          />
        ))}
      </div>
    );
  }
}

export default App;
