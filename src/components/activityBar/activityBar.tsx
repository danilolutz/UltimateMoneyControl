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
    };

    const accountStyle = {
      background: "url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath fill='#FFFFFF' d='M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z'/%3E%3C/svg%3E\") no-repeat 50% 50%",
      color: '#dddddd',
      cursor: 'pointer',
      display: 'inline-block',
      fill: '#ffffff',
      height: '50px',
      width: '100%'
    };

    const categoryStyle = {
      background: "url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath fill='#FFFFFF' d='M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z'/%3E%3C/svg%3E\") no-repeat 50% 50%",
      color: '#dddddd',
      cursor: 'pointer',
      display: 'inline-block',
      fill: '#ffffff',
      height: '50px',
      width: '100%'
    };

    const payeeStyle = {
        background: "url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath fill='#FFFFFF' d='M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z'/%3E%3C/svg%3E\") no-repeat 50% 50%",
        color: '#dddddd',
        cursor: 'pointer',
        display: 'inline-block',
        fill: '#ffffff',
        height: '50px',
        width: '100%'
    };

    const reportStyle = {
      background: "url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='#FFFFFF' d='M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z'/%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3C/svg%3E\") no-repeat 50% 50%",
      color: '#dddddd',
        cursor: 'pointer',
        display: 'inline-block',
        fill: '#ffffff',
        height: '50px',
        width: '100%'
    };

    return <div style={activityBarStyle}>
      <ul style={menuStyle}>
        <li>
          <a style={accountStyle} title='Account'>&nbsp;</a>
        </li>
        <li>
          <a style={categoryStyle} title='Category'>&nbsp;</a>
        </li>
        <li>
          <a style={payeeStyle} title='Payee'>&nbsp;</a>
        </li>
        <li>
          <a style={reportStyle} title='Reports'>&nbsp;</a>
        </li>
      </ul>
    </div>;
  }
}
