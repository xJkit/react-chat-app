import React, { Component, PropTypes } from 'react';

class App extends Component {

  static propTypes = {
    children: PropTypes.any,
  };

  render() {
    const styles = {
      sideMenuStyle: {
        width: 200,
        height: '100%',
        backgroundColor: 'gray',
      },
      MainWindowStyle: {
        flex: 1,
        paddingLeft: 16,
      },
      containerStyle: {
        display: 'flex',
      },
    };

    return (
      <div className="app" style={styles.containerStyle}>
        <div className="side-menu" style={styles.sideMenuStyle} />
        <div className="main-window" style={styles.MainWindowStyle}>
          <h1>Js Chatting Space</h1>
          <hr />
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
