import React from 'react';
import { observer } from 'mobx-react';

const App: React.FC = observer(() => {
  return (
    <div>
      <h1>Welcome!</h1>
      <p>First Name: Cristian</p>
      <p>Last Name: Cheptanaru</p>
      <p>Group: CR221</p>
    </div>
  );
});

export default App;
