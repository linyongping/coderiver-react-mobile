import * as React from 'react';
import { Switch, Route, Router, Link } from 'dva/router';
import { List, InputItem, Button, Icon, Picker } from 'antd-mobile';
import { History } from 'history';
import styles from './index.module.less';
import { arrayLast } from 'Util/utils';
import { PickerData } from 'antd-mobile/lib/picker/PropsType';
import { useState } from 'react';

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

    //当前进入的路由url
    let currentRoute = arrayLast(this.props.history.location.pathname.split('/'));
    let currentIndex = this.routeUrls.indexOf(currentRoute);

    this.state = {
      currentIndex: currentIndex + 1,
      method: ERegisterMethod.Email,
    };
  }
  private go = () => {
    let currentUrl: string;
    if (this.state.currentIndex === this.routeUrls.length) {
      currentUrl = '/login';
    } else {
      currentUrl = '/register/' + this.routeUrls[this.state.currentIndex];
      this.setState({ currentIndex: this.state.currentIndex + 1 });
    }
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
          <Button className={styles.right} icon="right" onClick={this.go} />
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

interface IPickerProps {
  data: PickerData[];
  title: string;
  head: string;
}

const PickerComponent = (props: IPickerProps) => {
  const [val, setVal] = useState(props.data[0].label);

  return (
    <RegisterItem title={props.title}>
      <h6>{props.head}</h6>
      <Picker data={props.data} cols={1} onOk={val => setVal(props.data[val].label as string)}>
        <span className={styles.val}>{val}</span>
      </Picker>
    </RegisterItem>
  );
};

const InputRole = () => {
  const data: PickerData[] = [
    {
      label: '产品经理',
      value: 0,
    },
    {
      label: '前端工程师',
      value: 1,
    },
    {
      label: 'Java工程师',
      value: 2,
    },
    {
      label: '运营',
      value: 3,
    },
    {
      label: '设计师',
      value: 4,
    },
    {
      label: '移动开发',
      value: 5,
    },
  ];

  const [role, setRole] = useState('设计师');

  return <PickerComponent title="您的角色?" head="选择角色" data={data} />;
};

const InputExperience = () => {
  const data: PickerData[] = [
    {
      label: '无经验',
      value: 0,
    },
    {
      label: '0-3年',
      value: 1,
    },
    {
      label: '3-5年',
      value: 2,
    },
    {
      label: '5-10年',
      value: 3,
    },
    {
      label: '10年以上',
      value: 4,
    },
  ];
  return <PickerComponent title="您的工作经验?" head="工作经验" data={data} />;
};
