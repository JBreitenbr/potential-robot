import './App.css'
import {useState,useEffect} from 'react'
/*/authentication/guest_session/new*/
const getData = async () => {
  let headers={'Authorization':'Bearer '};
  const response = await fetch(
    "https://api.themoviedb.org/3/authentication/guest_session/new",{headers});
  const data = await response.json();

  return data;
};
export default function App() {
  const handleClick = async () => {
    const data = await getData();
    console.log(data);
  }
  /*useEffect(() => {
    let headers={'Authorization':'Bearer '};
    fetch("https://api.themoviedb.org/3/movie/11",{headers}).then(res=>res.json()).then(data=>{console.log(data);              localStorage.setItem('guest_session_id',data.guest_session_id);        });
    
  }, []);*/
  return (
    <main>
      <button onClick={handleClick}>Click</button>
    </main>
  )
}
