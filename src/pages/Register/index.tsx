import * as React from 'react';
import { Switch, Route, Router, Link } from 'dva/router';
import { List, InputItem, Button, Icon } from 'antd-mobile';
import { History } from 'history';
import styles from './index.module.less';
import { fixIndex } from 'Util/utils';

enum ERegisterMethod {
  Email = 'email',
  Phone = 'phone',
}

export interface IRegisterProps {
  history: History;
}
interface IRegisterState {
  currentIndex: number;
  method: ERegisterMethod;
}

export class Register extends React.Component<IRegisterProps, IRegisterState> {
  private routeUrls = ['email', 'role', 'pwd', 'exp'];
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      method: ERegisterMethod.Email,
    };
  }
  private go = () => {
    let currentUrl = '/register/' + this.routeUrls[this.state.currentIndex];
    this.setState({ currentIndex: this.state.currentIndex + 1 });
    this.props.history.push(currentUrl);
  };
  private goBack = () => {
    this.props.history.go(-1);
    this.setState({ currentIndex: this.state.currentIndex - 1 });
  };
  private toggleRegisterMethod = () => {
    let nextUrl = this.state.method === ERegisterMethod.Email ? 'phone' : 'email';
    this.setState({ method: nextUrl as ERegisterMethod });
    this.props.history.replace('/register/' + nextUrl);
  };
  public render() {
    return (
      <div className={styles.register + ' bg'}>
        <div>
          <Icon type="left" size="lg" onClick={this.goBack} />
        </div>
        <Switch>
          <Route exact path="/register" component={InputName} />
          <Route exact path="/register/email" component={InputEmail} />
          <Route exact path="/register/phone" component={InputPhone} />
          <Route exact path="/register/role" component={InputRole} />
          <Route exact path="/register/pwd" component={InputPassWord} />
          <Route exact path="/register/exp" component={InputExperience} />
        </Switch>
        <div>
          {this.state.currentIndex === 1 && (
            <Button className={styles.left} onClick={this.toggleRegisterMethod}>
              {this.state.method === ERegisterMethod.Email ? '使用手机号注册' : '使用邮箱注册'}
            </Button>
          )}

          {this.state.currentIndex < this.routeUrls.length && (
            <Button className={styles.right} icon="right" onClick={this.go} />
          )}
        </div>
      </div>
    );
  }
}

interface IRegisterItem {
  title: string;
}

class RegisterItem extends React.Component<IRegisterItem, {}> {
  render() {
    const { title } = this.props;
    return (
      <>
        <h1>{title}</h1>
        {this.props.children}
      </>
    );
  }
}
const InputName = () => (
  <RegisterItem title="您的昵称?">
    <h6>昵称</h6>
    <input />
  </RegisterItem>
);

const InputEmail = () => (
  <RegisterItem title="您的邮箱?">
    <h6>输入邮箱</h6>
    <input />
  </RegisterItem>
);

const InputPhone = () => (
  <RegisterItem title="您的手机号?">
    <h6>手机号码</h6>
    <input />
  </RegisterItem>
);

const InputPassWord = () => (
  <RegisterItem title="创建密码">
    <h6>密码</h6>
    <input />
    <h6>确认密码</h6>
    <input />
  </RegisterItem>
);

const InputRole = () => (
  <RegisterItem title="您的角色?">
    <h6>选择角色</h6>
    <input />
  </RegisterItem>
);

const InputExperience = () => (
  <RegisterItem title="您的工作经验?">
    <h6>工作经验</h6>
    <input />
  </RegisterItem>
);
