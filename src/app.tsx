import { ipcRenderer } from 'electron';
import * as React from 'react';
import { Hello } from './components/hello';
import { ActivityBar } from './components/activityBar/activityBar';

interface AppState {
  activityBarOpen: boolean;
}

export class App extends React.Component<undefined, AppState> {
  constructor(props: any) {
    super(props);
    this.state = { activityBarOpen: true };
  }

  componentDidMount() {
    // When the document is rendered.
    const self = this;
    ipc.on('message', function (event, data) {
        // When the message is received...
        console.log('Message received');
        // ... change the state of this React component.
        self.setState({testValue: 'It worked!'});
    });
}

  showActivityBar(): void {
      this.setState({ activityBarOpen: !this.state.activityBarOpen });
  }

  render() {
    return (
      <div>
        <ActivityBar />
        <Hello compiler='TypeScript' framework='React' />
      </div>
    );
  }
}
