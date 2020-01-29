import React from 'react';
import './App.css';
import { AppBarCustom }  from '@my-app/library';

const App: React.FC = () => {
  return (
    <div className="App">
      <AppBarCustom title="React App with Lerna, Storybook & Material UI" />
    </div>
  );
}

export default App;
