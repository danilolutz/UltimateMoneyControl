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
      flex: '1 0',
      margin: 0,
      padding: 0
    };

    const menu2Style = {
      listStyle: 'none',
      color: '#ffffff',
      margin: 0,
      padding: 0
    };

    const accountStyle = {
      WebkitMask: "url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath fill='#FFFFFF' d='M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z'/%3E%3C/svg%3E\") no-repeat 50% 50%",
      backgroundColor: 'rgba(255,255,255,0.6)',
      cursor: 'pointer',
      display: 'inline-block',
      height: '50px',
      width: '100%'
    };

    const categoryStyle = {
      WebkitMask: "url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath fill='#FFFFFF' d='M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z'/%3E%3C/svg%3E\") no-repeat 50% 50%",
      backgroundColor: 'rgba(255,255,255,0.6)',
      cursor: 'pointer',
      display: 'inline-block',
      height: '50px',
      width: '100%'
    };

    const payeeStyle = {
        WebkitMask: "url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath fill='#FFFFFF' d='M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z'/%3E%3C/svg%3E\") no-repeat 50% 50%",
        backgroundColor: 'rgba(255,255,255,0.6)',
        cursor: 'pointer',
        display: 'inline-block',
        height: '50px',
        width: '100%'
    };

    const reportStyle = {
        WebkitMask: "url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='#FFFFFF' d='M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\") no-repeat 50% 50%",
        backgroundColor: 'rgba(255,255,255,0.6)',
        cursor: 'pointer',
        display: 'inline-block',
        height: '50px',
        width: '100%'
    };

    const importStyle = {
      WebkitMask: "url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M18 17H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V7h12v2zM3 22l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v20z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\") no-repeat 50% 50%",
      backgroundColor: 'rgba(255,255,255,0.6)',
      cursor: 'pointer',
      display: 'inline-block',
      height: '50px',
      width: '100%'
    }

    const settingsStyle = {
      WebkitMask: "url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'%3E%3Cpath fill='none' d='M0 0h20v20H0V0z'/%3E%3Cpath d='M15.95 10.78c.03-.25.05-.51.05-.78s-.02-.53-.06-.78l1.69-1.32c.15-.12.19-.34.1-.51l-1.6-2.77c-.1-.18-.31-.24-.49-.18l-1.99.8c-.42-.32-.86-.58-1.35-.78L12 2.34c-.03-.2-.2-.34-.4-.34H8.4c-.2 0-.36.14-.39.34l-.3 2.12c-.49.2-.94.47-1.35.78l-1.99-.8c-.18-.07-.39 0-.49.18l-1.6 2.77c-.1.18-.06.39.1.51l1.69 1.32c-.04.25-.07.52-.07.78s.02.53.06.78L2.37 12.1c-.15.12-.19.34-.1.51l1.6 2.77c.1.18.31.24.49.18l1.99-.8c.42.32.86.58 1.35.78l.3 2.12c.04.2.2.34.4.34h3.2c.2 0 .37-.14.39-.34l.3-2.12c.49-.2.94-.47 1.35-.78l1.99.8c.18.07.39 0 .49-.18l1.6-2.77c.1-.18.06-.39-.1-.51l-1.67-1.32zM10 13c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z'/%3E%3C/svg%3E\") no-repeat 50% 50%",
      backgroundColor: 'rgba(255,255,255,0.6)',
      cursor: 'pointer',
      display: 'inline-block',
      height: '50px',
      width: '100%'
    };
    //Icons License: https://www.apache.org/licenses/LICENSE-2.0.html site: https://material.io/tools/icons/
    return <div style={activityBarStyle}>
      <ul style={menuStyle}>
        <li>
          <a style={accountStyle} title='Bank Account (Ctrl+Shift+B)'></a>
        </li>
        <li>
          <a style={categoryStyle} title='Category (Ctrl+Shift+C)'></a>
        </li>
        <li>
          <a style={payeeStyle} title='Payee (Ctrl+Shift+P)'></a>
        </li>
        <li>
          <a style={reportStyle} title='Reports'></a>
        </li>
      </ul>
      <ul style={menu2Style}>
        <li>
          <a style={importStyle} title='Import *.CSV File (Ctrl+Alt+I)'></a>
        </li>
        <li>
          <a style={settingsStyle} title='Settings'></a>
        </li>
      </ul>
    </div>;
  }
}
