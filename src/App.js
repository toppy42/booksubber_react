import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Page from './layouts/Page'
import ContentSyncBlock from './components/ContentSyncBlock'

var divHeight = {
    height: '100px'
}

function App() {
  return (
    <div className="px-5 w-100">
        <Page>
            <ContentSyncBlock />
        </Page>
    </div>
  );
}

export default App;
