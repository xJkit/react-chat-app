import React, { Component } from 'react';
import Rodal from 'rodal';

class Welcome extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };
  }

  showModal() {
    this.setState({
      visible: true,
    });
  }

  hideModal() {
    this.setState({
      visible: false,
    });
  }

  render() {
    return (
      <Rodal
        visible={this.state.visible}
        onClose={::this.hideModal}
      >
        <div className="welcome-window">
          <h1>請輸入 ID:</h1>
        </div>
      </Rodal>
    );
  }
}

export default Welcome;
