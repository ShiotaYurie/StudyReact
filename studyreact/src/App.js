import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Todo } from './components/Todo';
import { About } from './components/About';

import './App.css';

function App() {
  return (
    <>
      <div>
        {/* Linkを設定する */}
        <h1> りあくとルーター</h1>
        {/* <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/todo">Todo</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>

        </ul> */}
        {/*pathにルートパスを指定して、elementで表示させたいコンポーネントを指定する */}
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/about" element={<About />} />
        </Routes>
        </BrowserRouter>
      </div>        
    </>
    
  );
}

//ルーティング設定


export default App;
