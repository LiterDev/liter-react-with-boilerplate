/**
 *
 * ImagePreview
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
    margin: theme.spacing.unit,
  },
  previewimg: {
    flex: 1,
    // width: '100%',
    width: 86,
    height: 86,
    border: {
      radius: 4,
      solid: 0.5,
      color: '#e3e3e3',
    },
  },
});
function ImagePreview(props) {
  return (
    // <div>
    //   <FormattedMessage {...messages.header} />
    // </div>
    <img className={props.className} src={props.src} alt={props.alt} />
  );
}

ImagePreview.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

// export default ImagePreview;
export default withStyles(styles)(ImagePreview);
