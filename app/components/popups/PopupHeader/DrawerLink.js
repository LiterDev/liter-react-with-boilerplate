import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import compose from 'recompose/compose';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  default: {
    color: 'inherit',
  },
  primary: {
    color: theme.palette.primary.main,
  },
  secondary: {
    color: theme.palette.secondary.main,
  },
  button: {
    '&:hover': {
      textDecoration: 'inherit',
    },
  },
});

class OnClick extends React.Component {
  handleClick = event => {
    if (this.props.onClick) {
      this.props.onClick(event);
    }

    if (this.props.onCustomClick) {
      this.props.onCustomClick(event);
    }
  };

  render() {
    const { component: ComponentProp, onCustomClick, ...props } = this.props;
    return <ComponentProp {...props} onClick={this.handleClick} />;
  }
}

OnClick.propTypes = {
  component: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  onCustomClick: PropTypes.func,
};

function DrawerLink(props) {
  const {
    activeClassName,
    children: childrenProp,
    classes,
    className: classNameProp,
    component: ComponentProp,
    to,
    onClick,
    prefetch,
    variant,
    ...other
  } = props;

  let ComponentRoot;
  const className = classNames(classes.root, classes[variant], classNameProp);
  let RootProps;
  let children = childrenProp;

  if (ComponentProp) {
    ComponentRoot = ComponentProp;
    RootProps = {
      ...other,
      className,
    };
  } else if (to) {
    ComponentRoot = Link;
    RootProps = {
      to
    };
    children = (
      <OnClick
        component="a"
        className={classNames(className)}
        onCustomClick={onClick}
        {...other}
      >
        {children}
      </OnClick>
    );
  } else {
    ComponentRoot = 'a';
    RootProps = {
      ...other,
      className,
    };
  }

  return <ComponentRoot {...RootProps}>{children}</ComponentRoot>;
}

DrawerLink.defaultProps = {
  variant: 'default',
  activeClassName: 'active',
};

DrawerLink.propTypes = {
  activeClassName: PropTypes.string,
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  component: PropTypes.any,
  to: PropTypes.string,
  onClick: PropTypes.func,
  prefetch: PropTypes.bool,
  // router: PropTypes.shape({
  //   pathname: PropTypes.string.isRequired,
  // }).isRequired,
  variant: PropTypes.oneOf(['default', 'primary', 'secondary', 'button']),
};

export default compose(
  withRouter,
  withStyles(styles),
)(DrawerLink);
