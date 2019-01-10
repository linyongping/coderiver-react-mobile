import * as React from 'react';
import { Switch, Route, Router } from 'dva/router';
import { List, InputItem } from 'antd-mobile';
import { History } from 'history';

export interface IRegisterProps {
  history: History;
}

export class Register extends React.Component<IRegisterProps, any> {
  public render() {
    return (
      <Router history={this.props.history}>
        <Switch>
          <Route exact path="/register" component={InputName} />
          <Route exact path="/register/1" component={InputName} />
          <Route exact path="/register/2" component={InputName} />
        </Switch>
      </Router>
    );
  }
}
const InputName = () => (
  <div>
    <h1>您的昵称</h1>
    <List renderHeader="昵称">
      <InputItem placeholder="请输入您的昵称" />
    </List>
  </div>
);
