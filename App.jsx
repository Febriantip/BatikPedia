import React from "react";
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Beranda from './pages/beranda';
import Katalog from './pages/katalog';
import KatalogBatikTradisional from './pages/katalogBatikTradisional';
import KatalogBatikModern from './pages/katalogBatikModern';
import Wisata from './pages/wisata';
import Edukasi from './pages/edukasi';
import Chatbot from './pages/chatbot';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Beranda/>}></Route>
          <Route path="/Katalog" element={<Katalog/>}></Route>
          <Route path="/katalogBatikTradisional" element={<KatalogBatikTradisional />} />
          <Route path="/katalogBatikModern" element={<KatalogBatikModern/>} />
          <Route path="/Wisata" element={<Wisata/>}></Route>
          <Route path="/Edukasi" element={<Edukasi/>}></Route>
          <Route path="/Chatbot" element={<Chatbot/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
