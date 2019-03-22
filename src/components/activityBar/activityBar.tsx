import {ipcRenderer} from 'electron';
import * as React from 'react';

interface ActivityBarState {
  isOpen: boolean;
}

export class ActivityBar extends React.Component<{}, ActivityBarState> {
  constructor(props: any) {
    super(props);
    this.state = {isOpen: true};
  }

  componentDidMount(): void {
    // When the document is rendered.
    const self = this;
    ipcRenderer.on('toggle-activitybar', function() {
      // ... change the state of this React component.
      self.setState({isOpen: !self.state.isOpen});
    });
  }

  render() {
    const isOpen = this.state.isOpen;
    return <div style={isOpen ? {} : {display: 'none'}}>ActivityBar</div>;
  }
}