import React, { Component } from 'react';
import propTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import * as action from '../actions/topics';
import * as selectors from '../selectors/topics';

class Topics extends Component {
  static propTypes = {
    isLoading: propTypes.bool.isRequired,
    topics: propTypes.arrayOf(
      propTypes.shape({
        id: propTypes.any.isRequired,
        title: propTypes.string.isRequired
      })
    ).isRequired,
    fetchTopicsAsync: propTypes.func.isRequired
  };

  componentDidMount() {
    this.props.fetchTopicsAsync();
  }

  render() {
    if (this.props.isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <div>Topics:</div>
        {this.props.topics.map(article => (
          <p key={article.id}>{article.title}</p>
        ))}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector(selectors);
const mapDispatchToProps = dispatch => bindActionCreators(action, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Topics);
