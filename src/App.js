import React from 'react';
import './App.css';
import EditProfilesButtonContainer from './components/EditProfilesButtonContainer/EditProfilesButtonContainer';
import WhosWatchingContainer from './components/WhosWatchingContainer/WhosWatchingContainer'

function App() {
  return (
    <div className="App h-100 d-flex flex-column align-items-center container-fluid justify-content-start">
      <EditProfilesButtonContainer />
      <WhosWatchingContainer />
    </div>
  );
}

export default App;