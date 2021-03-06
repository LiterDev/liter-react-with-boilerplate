/**
 *
 * ImagePreviewButton
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import ImagePreview from 'components/ImagePreview';
// import ImagePreviews from 'components/ImagePreviews';
import Slider from 'react-slick';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';

// import Sliders from 'components/Sliders';
// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

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
    width: 165,
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
    // flex: 1,
    width: '100%',
    // width: 86,
    // height: 86,
    border: {
      radius: 4,
      solid: 0.5,
      color: '#e3e3e3',
    },
  },
  icon: {
    margin: theme.spacing.unit * 2,
  },
  // slideItem: {
  //   width: 77,
  //   height: 86,
  //   borderRadius: 4,
  //   border: 'solid 0.5px #e3e3e3',
  //   marginLeft: 8,
  // },

  buttonText: {
    width: 60,
    height: 18,
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: 16,
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    textAlign: 'center',
    color: '#999999',
  },
});
/* eslint-disable react/prefer-stateless-function */
class ImagePreviewButton extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      imageCount: 0,
      // numChildren: 0,
      imageComponent: [],
    };
    this.handleAppend = this.handleAppend.bind(this);
    this.updateState = this.updateState.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    // this.onAddChild = this.onAddChild.bind(this);
  }

  handleAppend(event) {
    console.log(event);

    // this.setState({
    //   file: URL.createObjectURL(event.target.files[0]),

    // });
    if (event.target.files) {
      if (event.target.files.length > 0) {
        // console.log(event.target.files.length);

        // console.log(URL.createObjectURL(event.target.files[0]));
        // console.log(URL.createObjectURL(event.target.files[1]));
        // const form = new FormData();
        const imageComponentTmp = [];
        for (let i = 0; i < event.target.files.length; i += 1) {
          this.state.imageCount += 1;
          imageComponentTmp.push(
            {
              id: this.state.imageCount,
              name: `imgnames[${this.state.imageCount}]`,
              src: URL.createObjectURL(event.target.files[i]),
              alt: event.target.files[i].name,
            },
            // <Img src={URL.createObjectURL(event.target.files[i])} />,
          );
          // event.target.files
          // form.append('imgnames[0]', event.target.files[i]);
          // form.append('imgnames[1]', event.target.files[1]);
          this.props.handleImageAppend(
            `imgnames[${this.state.imageCount}]`,
            event.target.files[i],
          );

          // this.state.imageCount += 1;
          // imageCount: this.state.imageCount + 1,

          // this.setState(
          //   imageComponent: this.state.imageComponent.concat([{ id: 2, name: 'Another Name' }]),
          // );
          // this.state.imageComponent.concat([{ id: 2, name: 'Another Name' }]);
          // imgPreviewArea.append(<Img/>);
          // <Img />
          // console.log(this.state.imageCount);
        }
        this.updateState(imageComponentTmp);
      }
      const eventStatus = event;
      eventStatus.target.value = null;
    }

    // form.append('names[]', 'John');
    // console.log(Array.from(form.entries()));
    // const names = form.getAll('imgnames[]');
    // this.state.files.delete('imgnames[1]');
    // names
    //   .filter(name => name !== 'Bob')
    //   .forEach(name => form.append('names[]', name));
    // console.log(Array.from(form.entries()));

    // this.setState({ files: this.state.files.concat(event.target.files[1]) });
    // let filteredArray = this.state.people.filter(
    //   item => item !== e.target.value,
    // );
    // this.setState({ files: filteredArray });
    // this.setState({
    //   files: { $push: ['Third'] },
    // });
  }
  handleRemove(name) {
    // console.log(`imgnames====[${name}]`);
    // console.log(this.state.imageComponent);
    // console.log(this.state.imageComponent.length);

    const findRemoveIndex = [];
    if (this.state.imageComponent.length > 0) {
      for (let i = 0; i < this.state.imageComponent.length; i += 1) {
        // console.log(this.state.imageComponent[i]);
        // console.log(this.state.imageComponent[i].name);
        if (name === this.state.imageComponent[i].name) {
          findRemoveIndex.push(i);
        }
      }
    }
    // console.log(`findRemoveIndex====[${findRemoveIndex}]`);
    // const clone = this.state.imageComponent;
    // clone.concat(this.state.imageComponent);
    // console.log(clone);
    const copy = [...this.state.imageComponent];
    // console.log(copy);
    if (findRemoveIndex.length > 0) {
      for (let i = 0; i < findRemoveIndex.length; i += 1) {
        // this.state.imageComponent.splice(findRemoveIndex[i], 1);
        copy.splice(findRemoveIndex[i], 1);
      }
    }
    this.setState({
      imageComponent: copy,
    });
    // console.log(`imgnames after ====[${this.state.imageComponent.length}]`);
    // console.log(this.state.imageComponent);
    this.props.handleImageRemove(name);
  }
  updateState(imageComponentTmp) {
    // console.log(imageComponentTmp);
    this.setState({
      imageComponent: this.state.imageComponent.concat(imageComponentTmp),
    });
    // console.log(this.state.imageComponent);
  }

  render() {
    const { classes } = this.props;

    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      // lazyLoad: true,
      // initialSlide: 0,
    };
    return (
      <div>
        {/* <FormattedMessage {...messages.header} /> */}
        <div>
          <input
            accept="image/*"
            className={classes.inputfile}
            id="raised-button-file"
            multiple
            type="file"
            onInput={this.handleAppend}
          />
          <label htmlFor="raised-button-file">
            <Button
              variant="raised"
              color="default"
              className={classes.button}
              component="span"
            >
              <Typography className={classes.buttonText}>사진 추가</Typography>
              {/* <CloudUploadIcon className={classes.rightIcon} /> */}
              <Icon
                className={classes.icon}
                color="disabled"
                style={{ fontSize: 16 }}
              >
                add_circle
              </Icon>
            </Button>
          </label>
          {/* <ParentComponent addChild={this.onAddChild}>{children}</ParentComponent> */}
          <Grid item xs={12}>
            {this.state.imageComponent && (
              <Slider {...settings}>
                {this.state.imageComponent.map(movie => (
                  <div key={movie.toString()}>
                    <ImagePreview
                      // key={movie.key}
                      src={movie.src}
                      alt={movie.alt}
                      name={movie.name}
                      // width="60px"
                      className={classes.previewimg}
                      handleRemove={this.handleRemove}
                    />
                  </div>
                ))}
              </Slider>
            )}
          </Grid>
        </div>
      </div>
    );
  }
}

ImagePreviewButton.propTypes = {
  classes: PropTypes.object.isRequired,
  handleImageAppend: PropTypes.func.isRequired,
  handleImageRemove: PropTypes.func.isRequired,
};

// export default ImagePreviewButton;
export default withStyles(styles)(ImagePreviewButton);
