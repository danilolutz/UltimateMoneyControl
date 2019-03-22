import {ipcRenderer} from 'electron';
import * as React from 'react';

interface SideBarState {
  isOpen: boolean;
}

export class SideBar extends React.Component<{}, SideBarState> {
  constructor(props: any) {
    super(props);
    this.state = {isOpen: true};
  }

  componentDidMount(): void {
    // When the document is rendered.
    const self = this;
    ipcRenderer.on('toggle-sidebar', function() {
      // ... change the state of this React component.
      self.setState({isOpen: !self.state.isOpen});
    });
  }

  onClick(toggle: boolean): void {
    this.setState({isOpen: toggle});
  }

  render() {
    const isOpen = this.state.isOpen;
    return (
      <div style={isOpen ? {} : {display: 'none'}}>SideBar</div>
    );
  }
}
