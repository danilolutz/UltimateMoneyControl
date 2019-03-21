import * as React from 'react';
import { Hello } from './components/hello';
export class App extends React.Component<undefined, undefined> {
  render() {
    return (
      <div>
        <Hello compiler='TypeScript' framework='React' />
      </div>
    );
  }
}
