import * as React from 'react';

export class ContainerArea extends React.Component<{}, {}> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const ContainerAreaStyle = {
      display: 'flex',
      flexDirection: 'row',
      paddingLeft: '10px'
    };

    return (
      <div style={ContainerAreaStyle}>Container Area</div>
    );
  }
}
