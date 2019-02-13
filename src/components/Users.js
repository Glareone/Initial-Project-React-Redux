import React, { Component } from 'react';
import propTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import * as action from '../actions/users';
import * as selectors from '../selectors/users';

class Users extends Component {
  static propTypes = {
    isLoading: propTypes.bool.isRequired,
    users: propTypes.arrayOf(
      propTypes.shape({
        id: propTypes.any.isRequired,
        title: propTypes.string.isRequired
      })
    ).isRequired,
    fetchUsersAsync: propTypes.func.isRequired
  };

  componentDidMount() {
    this.props.fetchUsersAsync();
  }

  render() {
    if (this.props.isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <div>Users:</div>
        {this.props.users.map(article => (
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
)(Users);
