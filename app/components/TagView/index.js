/**
 *
 * TagView
 *
 */
/* react ref*/
import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
/* material-ui core */
import Chip from '@material-ui/core/Chip';

import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

/* material-ui icon */
/* containers */
/* components */
/* image */
/* ref */
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'left',
    flexWrap: 'wrap',
  },
  chip: {
    // margin: theme.spacing.unit / 2,
    borderRadius: 2,
    marginRight: 6,
    marginBottom: 6,
    // opacity: 0.5,
  },
  chipRoot: {
    height: '24px',
    borderRadius: '2px',
    // margin: '0px',
  },
  chipLabel: {
    fontSize: '13px',
    color: '#ffffff',
  },
});


const colorVariation = [
  '9e9374', 'b08c7f', 'a98e80', 'a59356', 'ca8185', '6e4130', '9c9287', 'ba8b67', 'a39087', '96947f',
  'bc8970', '8e573a', 'a88979', 'bd8b4a', 'b88b70', '9f945d', '999293', 'a49537', '929394', 'b08e63',
  'bb8974', '6b5934', '9b9475', '727f32', '999570', 'aa8e83', '5f4138', 'bd7360', '7c412f', '6b7d70',
  '57403c', '272324', '25637e', '404248', '4d9985', '6f7889', '6c5d85', '5f9ba9', '709f5f', 'a88f78',
  '857672', '81979c', '564c22', 'c08497', 'b15233', '806d49', '00a94f', '714042', '444744', '1c2c21',
  '003c5f', '2a7297', '699aa8', '4999aa', '40786d', '64859f', '8e8175', '849696', '6499b3', '006481',
  'e16769', '7a908c', '563c4d', '507467', 'a08f93', 'c06976', 'a18338', 'b48a87', '3f5886', 'dc7c29'
]

const selArry = [];
/* eslint-disable react/prefer-stateless-function */
class TagView extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      lastColor: '',
    };

  }

  // renderTag() {
  // const { classes } = this.props;
  // const { tags } = this.props;
  // const tagsArr = tags.split(',');
  // console.log('renderTag~~~');
  // console.log('render count');
  //   if (tagsArr.length > 0) {
  //     // const reviewArray = Object.values(data);
  //     console.log(tagsArr.length);
  //     return tagsArr.map(tag => (
  //       <Chip>{tag}</Chip>
  //       // <ReviewContainer review={row} data={row} key={type.concat(row.id)} />
  //     ));
  //   }
  //   return <div />;
  // }

  generateColor() {
    // return '#'.concat(
    //   Math.random()
    //     .toString()
    //     .substr(-6),
    // );
    // console.log(Math.floor(Math.random() * 50))

    let colorTag = colorVariation[Math.floor(Math.random() * 50)];
    if (selArry.includes(colorTag)) {
      colorTag = colorVariation[Math.floor(Math.random() * 50)];
    }
    selArry.push(colorTag);

    // console.log(selArry);
    // if (this.state.lastColor === colorTag) {
    //   colorTag = colorVariation[Math.floor(Math.random() * 50)];
    // }
    // console.log(colorTag);
    // this.setState({
    //   lastColor: colorTag,
    // })
    return '#'.concat(
      colorTag
    );
  }

  render() {
    const { classes, tags } = this.props;
    const tagsArr = tags.split(',');

    return (
      <Paper className={classes.root}>
        {tagsArr.map(tag => {
          let key = this.generateColor();
          const style = {
            backgroundColor: key,
          };

          return (
            <Chip
              classes={{ root: classes.chipRoot, label: classes.chipLabel }}
              style={style}
              key={tag.concat(key)}
              // avatar={avatar}
              label={tag}
              // onDelete={this.handleDelete(tag)}
              className={classes.chip}
            />
          );
        })}
      </Paper>
    );
  }
}

TagView.propTypes = {};

export default withStyles(styles)(TagView);
