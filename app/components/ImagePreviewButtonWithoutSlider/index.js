/**
 *
 * ImagePreviewButtonWithoutSlider
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';

const styles = theme => ({
  container: {
    // display: 'flex',
    // flexWrap: 'wrap',
    backgroundColor: '#ffffff',
    margin: '0px 0px 12px',
  },
  input: {
    margin: theme.spacing.unit,
    color: '#333333',
    '&:before': {
      borderBottomColor: '#e3e3e3',
    },
    '&:after': {
      borderBottomColor: '#1591ff',
    },
  },
  inputfile: { display: 'none' },
  cssFocused: {},
  cssUnderline: {
    '&:before': {
      borderBottomColor: '#e3e3e3',
    },
    '&:after': {
      borderBottomColor: '#e3e3e3',
    },
  },
  button: {
    margin: theme.spacing.unit,
    color: '#99999',
    width: 160,
    height: 40,
    backgroundColor: '#f4f4f4',
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
  previewimg: {
    width: '100%',
    border: {
      radius: 4,
      solid: 0.5,
      color: '#e3e3e3',
    },
  },
  icon: {
    // margin: theme.spacing.unit * 2,
    position: 'absolute',
    right: '24px',
    color: '#1591ff',
  },
  buttonText: {
    width: '100%',
    height: 18,
    position: 'absolute',
    // left: '33px',
    right: '12px',
    fontFamily: 'AppleSDGothicNeo',
    fontSize: 16,
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    textAlign: 'center',
    // color: '#999999',
    color: '#1591ff',
  },
});
/* eslint-disable react/prefer-stateless-function */
class ImagePreviewButtonWithoutSlider extends React.PureComponent {
  constructor(props) {
    super(props);

    this.handleAppend = this.handleAppend.bind(this);
  }

  handleAppend(event) {
    // console.log(event.target.files);
    if (event.target.files) {
      if (event.target.files.length > 0) {
        // for (let i = 0; i < event.target.files.length; i += 1) {

        // }
        // console.log('event.target.files');
        // console.log(event.target.files);
        this.props.handleImageAppend(event.target.files);
      }

      const eventStatus = event;
      eventStatus.target.value = null;
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <div>
          <input
            accept="image/*"
            className={classes.inputfile}
            id="raised-button-file"
            multiple
            type="file"
            name="media"
            // onInput={this.handleAppend}
            onChange={this.handleAppend}
          />
          <label htmlFor="raised-button-file">
            <Button
              variant="raised"
              color="default"
              className={classes.button}
              component="span"
            >
              <Typography className={classes.buttonText}>사진 추가</Typography>
              <Icon
                className={classes.icon}
                color="disabled"
                style={{ fontSize: 16 }}
              >
                add_circle
              </Icon>
            </Button>
          </label>
        </div>
      </div>
    );
  }
}

ImagePreviewButtonWithoutSlider.propTypes = {
  classes: PropTypes.object.isRequired,
  handleImageAppend: PropTypes.func.isRequired,
  // handleImageRemove: PropTypes.func.isRequired,
};

export default withStyles(styles)(ImagePreviewButtonWithoutSlider);
