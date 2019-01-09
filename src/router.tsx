import * as React from 'react';
import { Route, Router, Switch } from 'dva/router';
import Count from '@pages/Count';
import Welcome from '@pages/Welcome';
import StatefulCount from '@pages/StatefulCount';
import { History } from 'history';

export default ({ history }: { history: History }) => {
  return (
    <Router history={history}>
      <Switch>
        {/* <Route path="/" component={Welcome} /> */}
        <Route path="/" component={StatefulCount} />
      </Switch>
    </Router>
  );
};
