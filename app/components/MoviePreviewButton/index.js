/**
 *
 * MoviePreviewButton
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import MovieInputPop from 'components/popups/MovieInputPop';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

const styles = theme => ({
  root: {
    display: 'inline-block',
    width: '45%',
    // textAlign: 'center',
    // marginRight: 10,
    // float: 'right',
  },
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
    width: '100%',
    height: 40,
    backgroundColor: '#f4f4f4',
    // textAlign: 'left',
    // float: 'letf',
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
    // paddingRight: 12,
  },
  buttonText: {
    position: 'absolute',
    // left: '33px',
    right: '12px',
    width: '100%',
    height: 18,
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: 16,
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    textAlign: 'center',
    // color: '#1591ff',
    color: '#333333',
  },
});
/* eslint-disable react/prefer-stateless-function */
class MoviePreviewButton extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      selectedLnk: false,
    };

    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };
  // 카테고리팝업 핸들러
  handleClose = value => {
    if (value) {
      this.setState({ selectedLnk: value, open: false });
      this.props.handleImageAppend(value, 'mov');
    } else {
      this.setState({ open: false });
    }
    // console.log(value);
  };

  render() {
    const { classes, movRemainCount } = this.props;
    return (
      <div className={classes.root}>
        <div>
          <input
            // accept="image/*"
            className={classes.inputfile}
            id="raised-movie-file"
            // multiple
            type="button"
            // onInput={this.handleAppend}
            onClick={this.handleClickOpen}
          />
          <label htmlFor="raised-movie-file">
            <Button
              variant="raised"
              color="default"
              className={classes.button}
              component="span"
            >
              <Typography className={classes.buttonText}>
                동영상 추가
              </Typography>
              {/* <Icon
                className={classes.icon}
                color="disabled"
                style={{ fontSize: 16 }}
              >
                add_circle
              </Icon> */}
              <div className={classes.icon}>
                {movRemainCount > 0 ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <path d="M0 0h20v20H0z" />
                      <path
                        fill="#1591FF"
                        fill-rule="nonzero"
                        d="M18.333 3.333H15l1.667 3.334h-2.5L12.5 3.333h-1.667L12.5 6.667H10L8.333 3.333H6.667l1.666 3.334h-2.5L4.167 3.333h-.834c-.916 0-1.658.75-1.658 1.667l-.008 10c0 .917.75 1.667 1.666 1.667h13.334c.916 0 1.666-.75 1.666-1.667V3.333z"
                      />
                    </g>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <path d="M0 0h20v20H0z" />
                      <path
                        fill="#7C7C7C"
                        fill-rule="nonzero"
                        d="M18.333 3.333H15l1.667 3.334h-2.5L12.5 3.333h-1.667L12.5 6.667H10L8.333 3.333H6.667l1.666 3.334h-2.5L4.167 3.333h-.834c-.916 0-1.658.75-1.658 1.667l-.008 10c0 .917.75 1.667 1.666 1.667h13.334c.916 0 1.666-.75 1.666-1.667V3.333z"
                      />
                    </g>
                  </svg>
                )}
              </div>
            </Button>
          </label>
        </div>
        <div>
          <MovieInputPop open={this.state.open} onClose={this.handleClose} />
        </div>
      </div>
    );
  }
}

MoviePreviewButton.propTypes = {
  classes: PropTypes.object.isRequired,
  handleImageAppend: PropTypes.func.isRequired,
};

// export default MoviePreviewButton;
export default withStyles(styles)(MoviePreviewButton);
