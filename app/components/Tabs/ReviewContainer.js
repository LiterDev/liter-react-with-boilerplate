import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

const styles = {
  row: {
    display: 'flex',
    justifyContent: 'left',
  },
  col1: {
    flexGrow: 1,
  },
  col3: {
    flexGrow: 3,
  },
  reviewPhoto: {
    width: '90px',
    height: '90px',
    borderRadius: '2px',
  },
  left: {
    float: 'left',
  },
};

function ReviewContainer(props) {
  const { classes } = props;
  return (
    <div className={classes.row}>
      <div>{props.key}</div>
      <span className={classes.col1}>
        <img alt="" className={classes.reviewPhoto} src={props.data.imgUrl} />
      </span>
      <span className={classes.col3}>
        <div className={classes.row}>
          <span className={classNames(classes.left)}>
            {props.data.userName}
          </span>
          <span>{props.data.update}</span>
          <span>팔로우</span>
        </div>
        <div className={classes.row}>{props.data.title}</div>
        <div className={classes.row}>
          <span className={classes.col1}>{props.data.ingBoolean}</span>
          <span className={classes.col1}>{props.data.exportsCnt}</span>
          <span className={classes.col1}>{props.data.starAvg}</span>
        </div>
      </span>
    </div>
  );
}

export default withStyles(styles)(ReviewContainer);
