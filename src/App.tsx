
import "./App.css"
import SearchTodos from "./todos";
import SearchUsers from "./users";


function App() {

  return (
    <div className="section">
      <div>
      <SearchUsers/>
      </div>

      <div>
      
        <SearchTodos/>
      </div>
    </div>
  )
}

export default App;




/*
import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState<number>(0)

  const onIncrease = (): void => {

    setCount(prevCount => prevCount + 1)

  }

  const onDecrease = (): void => {
    setCount(prevCount => prevCount - 1)
  }

  return (
    <div>
      <h1>Counter App</h1>
      <p>{count}</p>
      <button onClick={onIncrease}>Increase</button>
      <button onClick={onDecrease}>Decrease</button>

    </div>
    
  );
}

export default App;

Run the following command to create a new React app with TypeScript:
npx create-react-app my-counter-app --template typescript

====================================================================

To add TypeScript to an existing React app, follow these steps:
npm install typescript @types/node @types/react @types/react-dom @types/jest --save-dev

Rename Files Change your .js files to .tsx for components and .ts for non-JSX files.

Create tsconfig.json Run this command to initialize a TypeScript configuration file:
npx tsc --init (A basic tsconfig.json will be created. You can customize it as needed.)

Adjust Import Statements Ensure all imports are correctly typed and any necessary type imports are added.

========================================================================

Why Rename Files
.tsx: Used for files containing JSX because TypeScript needs to understand JSX syntax.
.ts: Used for files that don't contain JSX, like utility functions or configuration files.

To convert your React app to TypeScript, rename the following files:

App.js to App.tsx: Because it contains JSX.
App.test.js to App.test.tsx: If it contains JSX.
index.js to index.tsx: Because it likely contains JSX.
reportWebVitals.js to reportWebVitals.ts: Typically, no JSX.
setupTests.js to setupTests.ts: Typically, no JSX.
After renaming, ensure all imports within the files are updated to match the new extensions.

=============================================================================




*/

