import React from "react";
import DocLogin from "./frontend Components/DocLogin/DocLogin";
import Navbar from "./frontend Components/navbar/Navbar";
import HomePagee from "./frontend Components/HomePage/HomePage";
import Dashboard from "./frontend Components/Doctor Dashboard/DoctorDash";
import PatientForm from "./frontend Components/Prescription/doc-side-page-1/doc-page-1";
import DiagnosisForm from "./frontend Components/Prescription/doc-side-page-2/doc-page-24";
import SignupForm from "./frontend Components/DocSignUP/DocSignUp";
import MedicationApp from "./frontend Components/Prescription/doc-side-page-3/doc-page-3";
import Gen from "./frontend Components/General/general";
function Home(){
  return<>
    <Navbar/>
    <HomePagee/>
  </>
}


function LoginDoc(){
  return <>
   <Navbar/>
    <DocLogin/>
  </>
}

function Dash(){
  return <>
   <Navbar/>
    <Dashboard/>
  </>
}

function PatientForum(){
  return <>
    <Navbar/>
    <PatientForm/>
  </>
}

function DiagnosisForum(){
  return <>
    <Navbar/>
    <DiagnosisForm/>
  </>
}


function DoctSignup(){
  return <>
    <Navbar/>
    <SignupForm/>
  </>
}

function Form3(){
  return <>
    <Navbar/>
    <MedicationApp/>
  </>
}

function General(){
  return <>
    <Navbar/>
    <Gen/>
  </>
}


export {Home,LoginDoc,Dash,PatientForum,DiagnosisForum,DoctSignup,Form3,General};
