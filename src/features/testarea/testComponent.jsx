import React, { Component } from 'react';
import { connect } from 'react-redux'


const mapState = (state) => ({
    data: state.test.data
})


export class TestComponent extends Component {

    componentDidMount () {
        console.log(this.props.data)
    }

  render() {
    return (
      <div>
        <h1>Test Area</h1>
        <h2>the answer is: {this.props.data}</h2>
      </div>
    )
  }
}

export default connect(mapState)(TestComponent)
