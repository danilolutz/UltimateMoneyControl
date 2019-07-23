import * as React from 'react';

interface SideBarActionProps {
  title: string;
  icon: string;
}

export class SideBarAction extends React.Component<SideBarActionProps, {}> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <a title={this.props.title} className={'sidebar-action ' + this.props.icon}></a>
    );
  }
}
