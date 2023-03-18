import React from 'react';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import HomeScreen from './HomeScreen/HomeScreen';
import ProfileScreen from './Screens/ProfileScreen/ProfileScreen';
import RegisterStudent from './Screens/RegisterStudent/RegisterStudent';
import AttendanceScreen from './Screens/AttendanceScreen/AttendanceScreen';
import AnnouncementScreen from './Screens/AnnouncementScreen/AnnouncementScreen';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = '/' element = {<ProfileScreen/>}/>
        <Route path = '/home' element = {<HomeScreen/>}/>
        <Route path = '/profile' element = {<ProfileScreen/>}/>
        <Route path = '/register' element = {<RegisterStudent/>}/>
        <Route path = '/attendance' element = {<AttendanceScreen />}/>
        <Route path = '/announcements' element = {<AnnouncementScreen />}/>
      </Routes>
    </div>
  );
}

export default App;
