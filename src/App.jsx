import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Page from './layouts/Page';
import SyncEditingArea from './components/SyncEditingArea';

function App() {
  return (
    <div className="w-100">
      <Page>
        <SyncEditingArea />
      </Page>
    </div>
  );
}

export default App;
