import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import ReviewContainer from './ReviewContainer';
import RewardContainer from './RewardContainer';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
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

  renderContainer() {
    const { tabData } = this.props;
    const { value } = this.state;
    console.log(tabData[value].type);
    const result = [];
    if (tabData[value].type === 'REVIEW') {
      result.push(<div>리뷰 11</div>);
      result.push(
        tabData[value].list.map(list => (
          <ReviewContainer type={tabData[value].type} data={list} />
        )),
      );
    } else if (tabData[value].type === 'REWARD') {
      result.push(
        tabData[value].list.map(list => (
          <RewardContainer type={tabData[value].type} data={list} />
        )),
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
          <Tabs value={value} onChange={this.handleChange}>
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
