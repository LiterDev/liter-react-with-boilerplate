import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
// import Table from '@material-ui/core/Table';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import TableCell from '@material-ui/core/TableCell';
// import TableBody from '@material-ui/core/TableBody';

import ReviewContainer from './ReviewContainer';
import RewardContainer from './RewardContainer';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  topLine: {
    display: 'flex',
    flexGrow: 1,
    textAlign: 'left',
    paddingTop: '13px',
    paddingLeft: '16px',
    paddingRight: '16px',
  },
  reviewCount: {
    fontSize: '13px',
    fontWeight: '600',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#292d39',
  },
  rewardTopLine: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    fontSize: '12px',
    color: '#111111',
  },
  rewardHeaderDate: {
    width: '20%',
    textAlign: 'center',
    borderRight: '1px solid #aaaaaa',
  },
  rewardHeaderReward: {
    width: '40%',
    textAlign: 'center',
    borderRight: '1px solid #aaaaaa',
  },
  rewardHeaderTotal: {
    width: '40%',
    textAlign: 'center',
  },
  colDivider: {
    borderRight: '1px solid #aaaaaa',
  },
});

class SimpleTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  renderTab() {
    const { tabData } = this.props;
    return tabData.map(tab => <Tab label={tab.tabLabel} />);
  }

  renderRow(data) {
    return data.list.map(list => <RewardContainer data={list} />);
  }

  renderContainer() {
    const { tabData } = this.props;
    const { value } = this.state;
    const { classes } = this.props;

    const result = [];
    if (tabData[value].type === 'REVIEW') {
      result.push(
        <div className={classes.topLine}>
          <span className={classes.reviewCount}>리뷰 11</span>
        </div>,
      );
      result.push(
        tabData[value].list.map(list => (
          <ReviewContainer
            type={tabData[value].type}
            data={list}
            key={list.index}
          />
        )),
      );
    } else if (tabData[value].type === 'REWARD') {
      const data = tabData[value];
      result.push(
        <List>
          <ListItem>
            <div className={classes.rewardTopLine}>
              <span className={classes.rewardHeaderDate}>일시</span>
              <span className={classes.rewardHeaderReward}>보상액</span>
              <span className={classes.rewardHeaderTotal}>총액</span>
            </div>
          </ListItem>
          <Divider />
          {this.renderRow(data)}
        </List>,
      );
    }

    return result;
  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange} fullWidth>
            {this.renderTab()}
          </Tabs>
        </AppBar>
        {this.renderContainer()}
      </div>
    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  tabData: PropTypes.array,
};

export default withStyles(styles)(SimpleTabs);
