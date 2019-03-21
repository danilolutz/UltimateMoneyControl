import * as React from 'react';

interface ActivityBarState {
    isOpen: boolean;
}

export class ActivityBar extends React.Component<{}, ActivityBarState> {
  constructor(props: any) {
    super(props);
    this.state = { isOpen: true };
  }

  onClick(toggle: boolean): void {
      this.setState({ isOpen: toggle });
  }

  render() {
    const isOpen = this.state.isOpen;
    return (
        <div style={isOpen ? {} : { display: 'none' }} onClick={() => this.onClick(!isOpen)}>items</div>
    );
  }
}
