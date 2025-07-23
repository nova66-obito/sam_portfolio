import { useState ,useEffect} from 'react'
import './App.css';
import Loading from './components/loading/loading';
import Main from './views/index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
 const [count, setCount] = useState(true);
  useEffect(function(){
    setTimeout(()=>{
      setCount(false);
    },3000)
  },[])
  return (
    <>
     <BrowserRouter>
       <Routes>
           <Route path={'/'} element={count?<Loading/>:<Main/>}/>
           
       </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
