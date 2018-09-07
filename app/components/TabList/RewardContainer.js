import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import { FormattedMessage, FormattedNumber } from 'react-intl';
import classNames from 'classnames';

const styles = {
  tableRow: {
    display: 'flex',
    fontFamily: 'SFProDisplay',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    textAlign: 'right',
  },
  dateCol: {
    width: '20%',
    fontSize: '11px',
    lineHeight: '1.27',
    color: '#7c7c7c',
  },
  dateWidth: {
    width: '60px',
  },
  rewardCol: {
    width: '40%',
    fontSize: '15px',
    fontWeight: 'normal',
    color: '#7a91a5',
    paddingRight: '11px',
  },
  totalCol: {
    width: '40%',
    fontSize: '15px',
    fontWeight: '600',
    color: '#5777b1',
  },
  colDivider: {
    borderRight: '1px solid #aaaaaa',
  },
  tmpCss: {
    width: '100%',
    textAlign: 'center',
  },
  lcbText: {
    fontWeight: 800,
    fontSize: '13px',
    fontFamily: 'SFProText',
    marginLeft: 5,
  },
  krw: {
    fontSize: 12,
    marginRight: 3,
  },
};
function RewardContainer(props) {
  // const { classes, reward } = props;
  const { classes } = props;
  const { reward, key } = props;

  // console.log("]-------- Reward list sub Container::reward data list -------[");
  // console.log(reward);

  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const rewardDate = new Date(reward.createdAt).toLocaleDateString(
    'ko-KR',
    options,
  );
  // console.log(rewardDate);

  return (
    <Fragment>
      {/* <ListItem>
        <span className={classes.tmpCss}>보상 내역이 없습니다.</span>
      </ListItem> */}
      <ListItem className={classes.tableRow}>
        <span className={classNames(classes.dateCol, classes.colDivider)}>
          <div className={classes.dateWidth}>{rewardDate}</div>
        </span>
        <span className={classNames(classes.rewardCol, classes.colDivider)}>
          {/* {reward.claimLiterCube}
          <span className={classes.lcbText}>LCB</span> */}
          <span className={classes.krw}>₩</span>
          <FormattedNumber value={reward.claimLiterCubeKrw} />
        </span>
        <span className={classNames(classes.totalCol)}>
          {/* {reward.totalLiterCube}
          <span className={classes.lcbText}>LCB</span> */}
          <span className={classes.krw}>₩</span>
          <FormattedNumber value={reward.totalLiterCubeKrw} />
        </span>
      </ListItem>
      <Divider />
    </Fragment>
  );
}

export default withStyles(styles)(RewardContainer);
