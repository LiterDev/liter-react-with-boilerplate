/**
 *
 * ImagePreviewButton
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import ImagePreview from 'components/ImagePreview';
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
    this.props.handleImageRemove(name);
  }
  updateState(imageComponentTmp) {
    console.log(imageComponentTmp);
    this.setState({
      imageComponent: this.state.imageComponent.concat(imageComponentTmp),
    });
    // console.log(this.state.imageComponent);
  }
  // onAddChild = () => {
  //   console.log('=======');
  //   this.setState({
  //     numChildren: this.state.numChildren + 1,
  //   });
  // };
  next() {
    this.reactSwipe.next();
  }

  prev() {
    this.reactSwipe.prev();
  }
  render() {
    const { classes } = this.props;
    // console.log(Array.from(this.state.files.entries()));
    // const handleToUpdate = this.props.handleToUpdate;
    // return (<div><button onClick={() => handleToUpdate('someVar')}>Push me</button></div>
    // const children = [];
    // // console.log(this.state.numChildren);
    // for (let i = 0; i < this.state.numChildren; i += 1) {
    //   children.push(<ChildComponent key={i} number={i} />);
    // }
    console.log(this.state.imageComponent);

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
              Upload
              <CloudUploadIcon className={classes.rightIcon} />
            </Button>
          </label>
          {/* <ParentComponent addChild={this.onAddChild}>{children}</ParentComponent> */}
          {this.state.imageComponent &&
            this.state.imageComponent.map(movie => {
              console.log(movie);
              // console.log(movie.id);
              return (
                <div key={movie.id}>
                  {/* <Img /> */}
                  <ImagePreview
                    src={movie.src}
                    alt={movie.alt}
                    id={movie.name}
                    width="60px"
                    className={classes.previewimg}
                  />
                </div>
              );
            })}
        </div>
        <div>{/* <Sliders /> */}</div>
      </div>
    );
  }
}

// const ParentComponent = props => (
//   <div className="card calculator">
//     {/* <p>
//       <button href="#" onClick={props.addChild}>
//         Add Another Child Component
//       </button>
//     </p> */}
//     <div id="children-pane">{props.children}</div>
//   </div>
// );

// const ChildComponent = props => <div>I am child{props.number}</div>;

ImagePreviewButton.propTypes = {
  classes: PropTypes.object.isRequired,
  handleImageAppend: PropTypes.func.isRequired,
  handleImageRemove: PropTypes.func.isRequired,
};

// export default ImagePreviewButton;
export default withStyles(styles)(ImagePreviewButton);