import { ipcRenderer } from 'electron';
import * as React from 'react';

interface ActivityBarState {
  isOpen: boolean;
}

export class ActivityBar extends React.Component<{}, ActivityBarState> {
  constructor(props: any) {
    super(props);
    this.state = { isOpen: true };
  }

  componentDidMount(): void {
    // When the document is rendered.
    const self = this;
    ipcRenderer.on('toggle-activitybar', function () {
      // ... change the state of this React component.
      self.setState({ isOpen: !self.state.isOpen });
    });
  }

  render() {
    const isOpen = this.state.isOpen;

    const activityBarStyle = {
      backgroundColor: '#333333',
      display: isOpen ? 'flex' : 'none',
      flexDirection: 'column',
      position: 'relative',
      width: '50px',
    };

    const menuStyle = {
      listStyle: 'none',
      color: '#ffffff',
      margin: 0,
      padding: 0
    }

    const payeeStyle = {
        background: "url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath fill='#FFFFFF' d='M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z'/%3E%3C/svg%3E\") no-repeat 50% 50%",
        color: '#dddddd',
        display: 'inline-block',
        fill: '#ffffff',
        height: '36px',
        width: '36px'
    }

    return <div style={activityBarStyle}>
      <ul style={menuStyle}>
        <li>
          <a style={payeeStyle}>&nbsp;</a>
        </li>
      </ul>
    </div>;
  }
}
