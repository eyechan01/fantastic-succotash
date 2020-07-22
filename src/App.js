import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cards52: [
        { suit: 'clubs' },
        { number: "5" }
      ]
    };
  }

  render() {
    return (
      <div>
        Cardz yo:
      </div>
    );
  }
}

export default App;
