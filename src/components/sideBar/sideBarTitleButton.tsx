import { ipcRenderer } from 'electron';
import * as React from 'react';

interface SideBarState {
  isOpen: boolean;
}

export class SideBar extends React.Component<{}, SideBarState> {
  constructor(props: any) {
    super(props);
    this.state = { isOpen: true };
  }

  componentDidMount(): void {
    // When the document is rendered.
    const self = this;
    ipcRenderer.on('toggle-sidebar', function () {
      // ... change the state of this React component.
      self.setState({ isOpen: !self.state.isOpen });
    });
  }

  onClick(toggle: boolean): void {
    this.setState({ isOpen: toggle });
  }

  render() {
    const isOpen = this.state.isOpen;
    const sideBarStyle = {
      backgroundColor: '#252526',
      color: '#ccc',
      display: isOpen ? '' : 'none',
      flex: '0 0 auto',
      paddingLeft: '10px',
      width: '300px'
    };

    return (
      <div style={sideBarStyle}></div>
    );
  }
}
