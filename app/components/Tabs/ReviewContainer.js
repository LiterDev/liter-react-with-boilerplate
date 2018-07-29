import React from 'react';
import Typography from '@material-ui/core/Typography';

function ReviewContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      <div>{props.data.imgUrl}</div>
      <div>{props.data.userName}</div>
      <div>{props.data.update}</div>
      <div>{props.data.title}</div>
      <div>{props.data.ingBoolean}</div>
      <div>{props.data.exportsCnt}</div>
      <div>{props.data.starAvg}</div>
    </Typography>
  );
}

export default ReviewContainer;
