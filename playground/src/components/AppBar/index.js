import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MTAppBar from "@material-ui/core/AppBar";
import MTToolbar from "@material-ui/core/Toolbar";
import MTTypography from "@material-ui/core/Typography";
import MTIconButton from "@material-ui/core/IconButton";
import MTMenuIcon from "@material-ui/icons/Menu";

const styles = {
  appBar: {
    position: "relative"
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

function AppBar(props) {
  const { classes } = props;
  return (
    <MTAppBar position="static" className={classes.appBar}>
      <MTToolbar>
        <MTIconButton
          className={classes.menuButton}
          color="inherit"
          aria-label="Menu"
        >
          <MTMenuIcon />
        </MTIconButton>
        <MTTypography variant="h6" color="inherit" className={classes.grow}>
          Editor JS Playground
        </MTTypography>
      </MTToolbar>
    </MTAppBar>
  );
}

AppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AppBar);
