import React , {useEffect} from 'react';
import styles from  './App.module.css';
import { useSelector,useDispatch } from 'react-redux';
import { selectUser, login,logout } from './features/userSlice';
import { auth } from './firebase';

const App:React.FC=()=> {
  const user = useSelector(selectUser);
  const dispatch =useDispatch();

  useEffect(()=>{
    const unsub =auth.onAuthStateChanged((authUser)=>{
     if(authUser){
      dispatch(login({
        uid: authUser.uid,
        photoUrl: authUser.photoURL,
        displayName:authUser.displayName,
      })
      );
     }else{
      dispatch(logout());
     }
    })
    return()=>{
      unsub();
    };
  },[dispatch]);
  return (
    <div className="App">

    </div>
  );
}

export default App;
