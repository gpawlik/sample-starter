import React, { Component } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { fetch } from './actions';
import { selectSomething, selectIsLoading } from './selector';

class Foo extends Component {
  constructor(props) {
    super(props);
  }

  _handleFooFetch = () => {
    this.props.onFooFetch();
  }

  render() {
    const { isLoading } = this.props;

    return (
      <div>
        <p>{isLoading && 'isLoading'}?</p>
        <button onClick={this._handleFooFetch}>fetch</button>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  something: selectSomething(),
  isLoading: selectIsLoading()
});

const mapDispatchToProps = dispatch => {
  return {
    onFooFetch: () => {
      dispatch(fetch());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Foo);
