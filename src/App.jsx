import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Page from './layouts/Page';
import ContentSyncRow from './components/ContentSyncRow';
import ControlRow from './components/ControlRow';

function App() {
  return (
    <div className="w-100">
      <Page>
        <ContentSyncRow />
        <ControlRow />
      </Page>
    </div>
  );
}

export default App;
