import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import './App.css';
import { login, logout, selectUser } from './features/userSlice';
import Feed from './Feed';
import { auth } from './firebase';
import Header from './Header';
import Login from './Login';
import SideBar from './SideBar';
import Widget from './Widget';

function App() {

  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(()=>{
    auth.onAuthStateChanged((userAuth=>{
      if(userAuth){
        //user is logged in
        dispatch(login({
          email: userAuth?.email,
          uid: userAuth?.uid,
          displayName: userAuth?.displayName,
          photoUrl: userAuth?.photoURL
      }))
      }
      else{
        //user is logged out
        dispatch(logout({}))
      }
    }))
  }, [])

  return (
    <div className="app">

      {/* Header */}
       

        {!user ? (<Login />) : (
           <>
           <Header />
            <div className="app_body">
              <SideBar />
              <Feed />
              < Widget />
            </div>
           </>
           
        )}

        
    </div>
  );
}

export default App;
