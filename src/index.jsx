import React from "react";
import ReactDOM from "react-dom";

import { Router } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import { MuiThemeProvider } from "@material-ui/core/styles";
// My Components
import ResponsiveDrawer from "./components/ResponsiveDrawer";

// MobX
import { observer } from "mobx-react";
import UIStore from "./store/UIStore";

const history = createBrowserHistory();

@observer
class App extends React.Component {
  componentWillMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <Router history={history}>
        <MuiThemeProvider theme={UIStore.theme}>
          <ResponsiveDrawer />
        </MuiThemeProvider>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
