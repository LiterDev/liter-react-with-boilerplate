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
    opacity: 0.5,
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

/* eslint-disable react/prefer-stateless-function */
class TagView extends React.PureComponent {
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
    return '#'.concat(
      Math.random()
        .toString(16)
        .substr(-6),
    );
  }

  render() {
    const { classes } = this.props;
    const { tags } = this.props;
    const tagsArr = tags.split(',');

    return (
      <Paper className={classes.root}>
        {tagsArr.map(tag => {
          const key = this.generateColor();
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
