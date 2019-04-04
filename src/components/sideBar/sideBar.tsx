import { ipcRenderer } from 'electron';
import * as React from 'react';

interface SideBarState {
  isOpen: boolean;
}

interface SideBarProps {
  title: string;
}

export class SideBar extends React.Component<SideBarProps, SideBarState> {
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
    const props = this.props;
    const isOpen = this.state.isOpen;
    const sideBarStyle = {
      backgroundColor: '#252526',
      color: '#ccc',
      display: isOpen ? '' : 'none',
      flex: '0 0 auto',
      marginTop: '0',
      paddingLeft: '0',
      paddingTop: '0',
      width: '300px'
    };

    const sideBarTitleStyle = {
      backgroundColor: 'rgba(128, 128, 128, 0.2)',
      height: '22px',
      lineHeight: '22px',
      marginTop: '0',
      padding: '5px',

      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      fontSize: '11px',
      WebkitMarginBefore: '0',
      WebkitMarginAfter: '0'
    };

      // backgroundColor: '#252526',
      // color: '#ccc',
      // display: isOpen ? '' : 'none',
      // flex: '0 0 auto',
      // paddingLeft: '10px',
      // width: '300px'
    // };

    return (
      <div style={sideBarStyle}>
        <h1 style={sideBarTitleStyle}>{props.title}</h1>
        <div >
          {props.children}
        </div>
      </div>
    );
  }
}
