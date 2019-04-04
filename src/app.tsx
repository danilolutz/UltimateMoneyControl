import * as React from 'react';
import { ActivityBar } from './components/activityBar/activityBar';
import { ContainerArea } from './components/containerArea/containerArea';
import { SideBar } from './components/sideBar/sideBar';

const rootStyle = {
  height: '100%',
  overflow: 'hidden',
  position: 'absolute',
  width: '100%',
};

const divStyle = {
  backgroundColor: '#222222',
  color: '#dddddd',
  display: 'flex',
  fontSize: '12px',
  fontFamily: '"Droid Sans Mono", Inconsolata, "Courier New", monospace, "Droid Sans Fallback"',
  flexDirection: 'row',
  flex: '1',
  height: '100%',
  overflow: 'hidden',
  position: 'relative'
};

export class App extends React.Component<undefined, undefined> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div style={rootStyle}>
        <div style={divStyle}>
          <ActivityBar />
          <SideBar title={'Accounts'} />
          <ContainerArea />
        </div>
      </div>

    );
  }
}
