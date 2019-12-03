import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Page from './layouts/Page'

var divHeight = {
    height: '100px'
}

function App() {
  return (
    <div className="px-5 w-100">
        <Page>
            <div className="d-inline-block w-40" style={{height:'100px', backgroundColor: 'blue'}}></div>
            <div className="d-inline-block w-20" style={{height:'100px', backgroundColor: 'white'}}></div>
            <div className="d-inline-block w-40" style={{height:'100px', backgroundColor: 'red'}}></div>
        </Page>
    </div>
  );
}

export default App;
