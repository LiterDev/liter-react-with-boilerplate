/**
 *
 * ReplyItem
 *
 */
/* react ref*/
import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
/* material-ui core */
/* material-ui icon */
/* containers */
/* components */
/* image */
/* ref */
import { FormattedMessage } from 'react-intl';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class ReplyItem extends React.PureComponent {
  render() {
    return (
      <div>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

ReplyItem.propTypes = {};

export default ReplyItem;
