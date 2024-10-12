import React from 'react';
import Login from '../components/Login.js';
import Description from '../components/Description.js';
import Uploadfile from '../components/Upload.js';
import History from '../components/History.js';
import Features from '../components/Features.js';
import { Space } from 'antd';
import '../views/App.css'

function App() {

  return (
    <div>
      <header>

        <Login />
      </header>
      <body className='container' style={{ maxWidth: '993px' }}>
        <Space direction='vertical' size={'middle'} style={{ display: 'flex' }}>

          <Description />

          <Uploadfile />

          <History />

          <Features />

          <div style={{ height: '100px', width: '100px' }}> </div>

        </Space>


      </body>
    </div>
  )
};
export default App;