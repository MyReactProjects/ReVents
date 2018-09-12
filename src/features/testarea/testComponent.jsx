import React, { Component } from 'react';
import { connect } from 'react-redux'





class TestComponent extends Component {

  render() {
    return (
      <div>
        <h1>Test Area</h1>
        <h2>the answer is: {this.props.data}</h2>
      </div>
    )
  }
}

const mapState = (state) => ({
    data: state.test.data
})

export default connect(mapState)(TestComponent)
