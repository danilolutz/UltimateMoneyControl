import * as React from 'react';

export class SideBarActions extends React.Component<{}, {}> {
    constructor(props: any) {
      super(props);
    }

    render() {
        return (
            <div className='sidebar-actions'>
                {this.props.children}
            </div>
        );
    }
}
