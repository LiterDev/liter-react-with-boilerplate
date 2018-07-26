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
// import Img from 'components/Img';
// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
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
    width: '100%',
  },
});
/* eslint-disable react/prefer-stateless-function */
class ImagePreviewButton extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      imageCount: 0,
      numChildren: 0,
    };
    this.handleAppend = this.handleAppend.bind(this);
    this.onAddChild = this.onAddChild.bind(this);
  }

  handleAppend(event) {
    // this.setState({
    //   file: URL.createObjectURL(event.target.files[0]),

    // });
    if (event.target.files) {
      if (event.target.files.length > 0) {
        // console.log(event.target.files.length);

        // console.log(URL.createObjectURL(event.target.files[0]));
        // console.log(URL.createObjectURL(event.target.files[1]));
        // const form = new FormData();
        for (let i = 0; i < event.target.files.length; i += 1) {
          // event.target.files
          // form.append('imgnames[0]', event.target.files[i]);
          // form.append('imgnames[1]', event.target.files[1]);
          this.props.handleImageAppend(
            `imgnames[${this.state.imageCount}]`,
            event.target.files[i],
          );
          this.state.imageCount += 1;
          // <Img />
          // console.log(this.state.imageCount);
        }
      }
    }

    // form.append('names[]', 'John');
    // console.log(Array.from(form.entries()));
    // const names = form.getAll('imgnames[]');
    // this.state.files.delete('imgnames[1]');
    // names
    //   .filter(name => name !== 'Bob')
    //   .forEach(name => form.append('names[]', name));
    // console.log(Array.from(form.entries()));
    // this.setState({ files: this.state.files.concat(event.target.files[0]) });
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
  onAddChild = () => {
    console.log('=======');
    this.setState({
      numChildren: this.state.numChildren + 1,
    });
  };
  render() {
    const { classes } = this.props;
    // console.log(Array.from(this.state.files.entries()));
    // const handleToUpdate = this.props.handleToUpdate;
    // return (<div><button onClick={() => handleToUpdate('someVar')}>Push me</button></div>
    const children = [];
    console.log(this.state.numChildren);
    for (let i = 0; i < this.state.numChildren; i += 1) {
      children.push(<ChildComponent key={i} number={i} />);
    }

    return (
      <div>
        {/* <FormattedMessage {...messages.header} /> */}
        <input
          accept="image/*"
          className={classes.inputfile}
          id="raised-button-file"
          multiple
          type="file"
          onChange={this.handleAppend}
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
        <ParentComponent addChild={this.onAddChild}>{children}</ParentComponent>
      </div>
    );
  }
}

const ParentComponent = props => (
  <div className="card calculator">
    <p>
      <button href="#" onClick={props.addChild}>
        Add Another Child Component
      </button>
    </p>
    <div id="children-pane">{props.children}</div>
  </div>
);

const ChildComponent = props => <div>I am child{props.number}</div>;

ImagePreviewButton.propTypes = {
  classes: PropTypes.object.isRequired,
  handleImageAppend: PropTypes.func.isRequired,
  handleImageRemove: PropTypes.func.isRequired,
};

// export default ImagePreviewButton;
export default withStyles(styles)(ImagePreviewButton);
