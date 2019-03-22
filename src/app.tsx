import * as React from 'react';
import {ActivityBar} from './components/activityBar/activityBar';
import {SideBar} from './components/sideBar/sideBar';

export class App extends React.Component<undefined, undefined> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div>
        <ActivityBar />
        <SideBar />
      </div>
    );
  }
}
