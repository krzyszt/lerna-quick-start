import React from 'react';
import { AppBarCustom } from '@my-app/library';

const App: React.FC = () => {
  return (
    <div>
      <AppBarCustom title="React App with Lerna, Storybook & Material UI" />
      <div className="p-3 bg-orange-300 w-full">
        <p className="text-red-400 text-lg select-none resize">Hello</p>
      </div>

    </div>
  );
}

export default App;
