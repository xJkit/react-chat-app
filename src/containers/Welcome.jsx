import React, { Component, PropTypes } from 'react';
import Rodal from 'rodal';

class Welcome extends Component {

  static propTypes = {
    router: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };
  }

  onIdSubmit(evt) {
    evt.preventDefault();
    console.log(`your name Id: ${this.refs.nameId.value}`);
    this.hideModal();
  }

  showModal() {
    this.setState({
      visible: true,
    });
  }

  hideModal() {
    // debugger;
    this.props.router.push('/chatroom');
    this.setState({
      visible: false,
    });
  }

  render() {
    return (
      <Rodal
        visible={this.state.visible}
        onClose={::this.hideModal}
        width={600}
        height={175}
      >
        <form className="welcome-window" onSubmit={::this.onIdSubmit}>
          <span>請輸入 ID:</span>
          <input type="text" ref="nameId" />
          <button type="submit">確定</button>
          <button type="button" onClick={::this.hideModal}>
            取消
          </button>
        </form>
      </Rodal>
    );
  }
}

export default Welcome;
