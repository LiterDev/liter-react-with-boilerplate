/**
 *
 * TabContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 0,
  },
});
/* eslint-disable react/prefer-stateless-function */
class TabContainer extends React.PureComponent {
  render() {
    return <div>{this.props.children}</div>;
  }
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

// export default TabContainer;
export default withStyles(styles)(TabContainer);
