import { ipcRenderer } from 'electron';
import * as React from 'react';
import { SideBarActions } from '../sideBarActions/sideBarActions';
import { SideBarAction } from '../sideBarActions/sideBarAction';

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

  render() {
    const props = this.props;
    const isOpen = this.state.isOpen;

    let className = 'sidebar';
    if (!isOpen) {
      className += ' closed';
    }

    return (
      <div className={className}>
        <div className='sidebar-header'>
          <h1 className='sidebar-title'>{props.title}</h1>
          <SideBarActions>
              <SideBarAction title='New Bank Account' icon='new-bank-account' />
          </SideBarActions>
        </div>
        <div>
          {props.children}
        </div>
      </div>
    );
  }
}
