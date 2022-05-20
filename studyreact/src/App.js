import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Todo } from './components/Todo';
import { About } from './components/About';
import { Todos } from './components/Todos';
import { Abouts } from './components/Abouts';

import './App.css';

function App() {
  return (
    <>
      <div>
        {/* Linkを設定する */}
        <h1> りあくとルーター</h1>
        {/*pathにルートパスを指定して、elementで表示させたいコンポーネントを指定する */}
        {/* Layoutでまとめて管理する */}
        <BrowserRouter>
        <Routes>
          <Route path ="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="todo" element={<Todo />} />
            <Route path="todo/:todoId" element={<Todos />} />
            <Route path="about" element={<About />} />
            <Route path="about/:aboutId" element={<Abouts />} />
          </Route>
        </Routes>
        </BrowserRouter>
      </div>        
    </>
    
  );
}

//ルーティング設定
//参考
//https://www.webopixel.net/javascript/1773.html

export default App;
