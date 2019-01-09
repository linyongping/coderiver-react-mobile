import * as React from 'react';
import logoUrl from '../../assets/images/logo图案.png';
import logoUrl2 from '../../assets/images/logo.png';
import styles from './index.module.less';
import { Button } from 'antd-mobile';

export interface IAppProps {}

export default class Welcome extends React.Component<IAppProps, any> {
  private renderInitPage() {
    return (
      <div className={styles.logo}>
        <div>
          <img src={logoUrl} alt="logo" />
        </div>
        <div className={styles.co}>
          <span>CodrRiver©2018</span>
        </div>
      </div>
    );
  }
  public render() {
    return (
      <div className={styles.sign}>
        <div>
          <a href="">登录</a>
        </div>
        <div>
          <img src={logoUrl2} alt="" />
        </div>
        <h1>欢迎来到CodeRiver</h1>
        <div>
          <Button type="primary">primary</Button>
        </div>
      </div>
    );
  }
}
