import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
// import classNames from 'classnames';

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
};
function RewardContainer(props) {
  // const { classes, reword } = props;
  const { classes } = props;
  return (
    <Fragment>
      <ListItem>
        <span className={classes.tmpCss}>보상 내역이 없습니다.</span>
      </ListItem>
      {/* <ListItem className={classes.tableRow}>
        <span className={classNames(classes.dateCol, classes.colDivider)}>
          <div className={classes.dateWidth}>{reword.data.date}</div>
        </span>
        <span className={classNames(classes.rewardCol, classes.colDivider)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="18"
            viewBox="0 0 8 18"
          >
            <g fill="none" fillRule="evenodd">
              <path fill="#FFF" d="M-176-419h375v740h-375z" />
              <path
                fill="#7A91A5"
                fillRule="nonzero"
                d="M5.905 5.001l.095.09v.864l-.029.064-.118.071c-1.028 0-1.993.569-2.54 1.46l2.59.043.097.094-.05.909-.098.085-2.824-.038a2.712 2.712 0 0 0-.023.335l.001.067v.024c.002.093.002.155-.002.208l2.9.043.096.095-.05.908-.1.086-2.499-.06c.496.93 1.455 1.521 2.555 1.562l.094.095-.05.909-.097.085c-1.675 0-3.164-1.055-3.699-2.594l-1.06-.042L1 10.269l.049-.908.104-.086.718.043a3.886 3.886 0 0 1-.015-.34c0-.125.007-.222.03-.303l-.793-.039L1 8.542l.049-.909.101-.085.96.029A3.918 3.918 0 0 1 5.906 5z"
              />
            </g>
          </svg>
          {props.data.coin}
        </span>
        <span className={classNames(classes.totalCol)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="18"
            viewBox="0 0 8 18"
          >
            <g fill="none" fillRule="evenodd">
              <path fill="#FFF" d="M-297-419H78v740h-375z" />
              <path
                fill="#5777B1"
                fillRule="nonzero"
                d="M5.83 5.001l.053.023.117.145-.007.879-.059.097-.157.082c-.913 0-1.785.487-2.314 1.276l2.42.062.117.152-.075.946-.15.104-2.66-.036c-.009.089-.013.17-.013.247v.064l.001.024.001.128 2.78.064L6 9.41l-.075.947-.152.103-2.279-.054c.484.818 1.355 1.332 2.392 1.392L6 11.95l-.074.946-.149.104a3.87 3.87 0 0 1-3.638-2.546l-1.026-.062L1 10.24l.076-.947.158-.102.602.036a3.772 3.772 0 0 1-.008-.248c0-.09.004-.163.013-.226l-.729-.055L1 8.547l.075-.947.153-.103.872.027C2.696 5.962 4.17 4.957 5.83 5z"
              />
            </g>
          </svg>
          {reword.data.sum}
        </span>
      </ListItem> */}
      <Divider />
    </Fragment>
  );
}

export default withStyles(styles)(RewardContainer);
