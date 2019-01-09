import * as React from 'react';
import logoUrl from '../../assets/images/logo图案.png';
import styles from './index.module.less';

export interface IAppProps {}

export default class Welcome extends React.Component<IAppProps, any> {
  public render() {
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
}
