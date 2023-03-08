import React from 'react';
import './App.css';
import EditProfilesButtonContainer from './components/EditProfilesButtonContainer/EditProfilesButtonContainer';
import WhosWatchingContainer from './components/WhosWatchingContainer/WhosWatchingContainer'
import ProfileIconsContainer from './components/ProfilePickerSection/ProfileIconsContainer/ProfileIconsContainer';

function App() {
  return (
    <div className="App h-100 d-flex flex-column align-items-center container-fluid justify-content-start">
      <EditProfilesButtonContainer />
      <WhosWatchingContainer />
      <ProfileIconsContainer />
    </div>
  );
}

export default App;