/**
 *
 * TagInput
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

import Paper from '@material-ui/core/Paper';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 0,
  },
  inputTag: {
    minWidth: '100%',
    maxWidth: '100%',
    backgroundColor: '#f4f4f4',
    borderRadius: 4,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 11,
    paddingRight: 28,
  },
  chip: {
    margin: theme.spacing.unit / 2,
  },
});
/* eslint-disable react/prefer-stateless-function */
class TagInput extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      tagList: [],
    };
    this.onChange = this.onChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

    // this.detectSpacePresent = this.detectSpacePresent.bind(this);
  }
  // detectSpacePresent = e => {
  //   if (e.keyCode === 32) {
  //     // this.props.changeInputValue('');
  //     console.log('090909');
  //   }
  // };
  onChange(e) {
    // console.log('090909');
    if (this.state.tagList.length > 9) {
      return false;
    }
    const val = e.target.value;
    const lastChar = val[val.length - 1];
    const tagVal = replaceAll(val, ',', '');
    if (lastChar === ' ') {
      this.setState({
        value: '',
        // tagList: this.state.tagList.concat(val),
      });
      if (!this.state.tagList.includes(tagVal.trim())) {
        this.setState({
          tagList: this.state.tagList.concat(tagVal.trim()),
        });
      }
    } else {
      this.setState({ value: tagVal });
    }
    console.log(this.state.tagList);
    return true;
    // this.props.inputHandler && this.props.inputHandler(e);
  }
  handleDelete = data => () => {
    this.setState(state => {
      const tagList = [...state.tagList];
      const chipToDelete = tagList.indexOf(data);
      tagList.splice(chipToDelete, 1);
      return { tagList };
    });
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        {/* <FormattedMessage {...messages.header} /> */}
        <input
          className={classes.inputTag}
          placeholder="스페이스로 입력해주세요."
          value={this.state.value}
          onChange={this.onChange}
          onKeyDown={this.detectSpacePresent}
        />
        <Paper className={classes.root}>
          {this.state.tagList.map(data => {
            console.log(data);
            return (
              <Chip
                key={data.toString}
                label={data}
                onDelete={this.handleDelete(data)}
                className={classes.chip}
              />
            );
          })}
        </Paper>
        <input value={this.state.tagList} type="hidden" name="tags" />
      </div>
    );
  }
}

function replaceAll(str, searchStr, replaceStr) {
  return str.split(searchStr).join(replaceStr);
}

TagInput.propTypes = {};

// export default TagInput;
export default withStyles(styles)(TagInput);
