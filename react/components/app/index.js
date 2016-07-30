import React from 'react';

// Main app entry point
export default class App extends React.Component {
  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}
