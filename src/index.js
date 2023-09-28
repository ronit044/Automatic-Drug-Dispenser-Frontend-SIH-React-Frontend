import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home,LoginDoc,Dash,PatientForum,DiagnosisForum,DoctSignup,Form3,General} from './App';
ReactDOM.render(<>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/dash' element={<Dash/>}/>
      <Route path='/PatientForm1' element={<PatientForum/>}/>
      <Route path='/PatientForm2' element={<DiagnosisForum/>}/>
      <Route path='/PatientForm3' element={<Form3/>}/>
      <Route path='/DocLogin' element={<LoginDoc/>}/>
      <Route path='/DocSignup' element={<DoctSignup/>}/>
      <Route path='/General' element={<General/>}/>


    </Routes>
  </BrowserRouter>
</>,document.getElementById("root"));