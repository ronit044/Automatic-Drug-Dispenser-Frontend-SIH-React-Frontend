import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home,LoginDoc,Dash,PatientForum,DiagnosisForum} from './App';
ReactDOM.render(<>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/dash' element={<Dash/>}/>
      <Route path='/PatientForm1' element={<PatientForum/>}/>
      <Route path='/PatientForm2' element={<DiagnosisForum/>}/>
      <Route path='/PatientForm3' element={<PatientForum/>}/>

    </Routes>
  </BrowserRouter>
</>,document.getElementById("root"));