import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './Professor.css';
import {Html5QrcodeScanner} from 'html5-qrcode'
import { useState, useEffect } from 'react';

const Professor = () => {

  const [scanrResult, setScanResult] = useState(null)

  useEffect(()=>{
    const scanner = new Html5QrcodeScanner('reader', {
      qrbox: {
        width: 250,
        height :250
      },
      fps: 5,
    })
  
    scanner.render(success, error)
  
    function success(result){
      scanner.clear()
      setScanResult(result)
    }
  
    function error(err){
      console.warn(err)
    }
  },[])
  
  return (
    <div>
      <Navbar />
      <Link className='voltar' to='/'>Voltar</Link>
      <main>
        {scanrResult ? <div>Sucess: {scanrResult}</div> : <div id="reader"></div>}
      </main>
    </div>
  );
}

export default Professor;