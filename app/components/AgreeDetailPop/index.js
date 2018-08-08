/**
 *
 * AgreeDetailPop
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class AgreeDetailPop extends React.PureComponent {
  render() {
    return (
      <div>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

AgreeDetailPop.propTypes = {};

export default AgreeDetailPop;
