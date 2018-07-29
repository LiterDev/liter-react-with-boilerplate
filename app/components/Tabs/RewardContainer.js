import React from 'react';
import Typography from '@material-ui/core/Typography';

function RewardContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      <div>{props.data.date}</div>
      <div>{props.data.coin}</div>
      <div>{props.data.sum}</div>
    </Typography>
  );
}

export default RewardContainer;
