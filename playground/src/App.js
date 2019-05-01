import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";

import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "./components/AppBar";

import Editor from "./components/EditorJS";

import Card from "@material-ui/core/Card";

import CardActions from "@material-ui/core/CardActions";

import Button from "@material-ui/core/Button";

const styles = theme => ({
  root: {
    display: "flex"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: "100vh",
    overflow: "auto"
  }
});

class App extends Component {
  // constructor(props) {
  //   super(props);
  // }
  // const { classes } = this.props;

  handlerSave = output => {
    console.log(output);
  };

  render() {
    return (
      <>
        <CssBaseline />
        <AppBar />
        <main>
          <h1>Hwllo wolrd</h1>
          <Card>
            <Editor />
            <CardActions>
              {/* <Button size="small" color="primary">
                Save
              </Button> */}
            </CardActions>
          </Card>
        </main>
      </>
    );
  }
}

export default withStyles(styles)(App);
