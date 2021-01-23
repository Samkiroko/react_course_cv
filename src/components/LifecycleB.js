import React, { Component } from 'react';
import LifecycleB from './LifecycleB';

class LifecycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Samuel',
    };
    console.log('LifecycleB constructor');
  }
  static getDerivedStateFromProps(props, state) {
    console.log('LifecycleB getDerivedStateFromProps');
    return null;
  }
  componentDidMount() {
    console.log('LifecycleB componentDidMount');
  }
  shouldComponentUpdate() {
    console.log('LifecycleB shouldComponentUpdate');
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('LifeCycleB getSnapshotBeforeUpdate');
  }
  componentDidUpdate() {}

  render() {
    console.log('LifecycleB render');
    return (
      <div>
        <div>LifecycleB</div>
        <LifecycleB />
      </div>
    );
  }
}

export default LifecycleB;
