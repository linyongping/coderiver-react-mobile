import * as React from 'react';
import logoUrl from '../../assets/images/logo图案.png';
import './index.module.less';

export interface IAppProps {}

export default class Welcome extends React.Component<IAppProps, any> {
  public render() {
    return (
      <div styleName="logo">
        <img src={logoUrl} alt="logo" />
      </div>
    );
  }
}
