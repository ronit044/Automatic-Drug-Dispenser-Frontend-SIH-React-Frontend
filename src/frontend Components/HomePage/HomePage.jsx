import React from 'react';
import "./HomePageCSS.css"

const HomePagee = () => {

    

  return (
    <>
    <div>

      {/* Add any external stylesheets or font imports here */}
      {/* For example: */}
      {/* <link rel="stylesheet" href="your-stylesheet.css" /> */}
      
      <marquee>
        <h1>MEDZONE Welcomes U | Get Your First "QR SCANNED PRESCRIPTION" DONE AT FREE OF COST " Instant Services Even at your Doorstep</h1>
      </marquee>

      {/* Start Section Coding */}
      <section>
        <div className="w-80" style={{ padding: 0 }}>
          <div className="section-img">
            <div className="section-bg-box">
              <h1 className="animated slideInLeft">Automatic Drug Dispenser</h1>
              <h2 className="animated slideInRight">Prescriptions at your fingertips</h2>
            </div>
          </div>
          {/* text decoration coding */}
          <br /><br />
          <div className="wel">
            <h1 className="welcome-text">WELCOME TO MEDZONE </h1>
            <br /><br />
            <p>
              Our innovative concept, the QR Code Drug ATM, arises from a pressing issue in healthcare - the enduring inconvenience of long queues for patients. We aim to streamline this process and enhance patient well-being by combining modern technology with a patient-centric approach. Patients often endure physical and mental discomfort in addition to their illnesses while waiting. By employing QR-coded prescriptions, our system allows doctors to generate prescriptions with embedded QR codes. Patients can conveniently access their prescribed medications from the automated dispenser machines, reducing stress and improving medication accuracy. We also prioritize offering a comprehensive range of Ayush medicines commonly found in hospitals and pharmacies. Our inspiration lies in reimagining healthcare to make it efficient, accessible, and user-friendly, ultimately enhancing the quality of patient care.
            </p>
          </div>
          <br />

          <h1 className="welcome-text" style={{ marginLeft: '5%' }}>OUR OUTSTANDING SERVICES</h1>
          <br />
          <div className="nextcontent">
            <div className="department">
              <h2 style={{ textAlign: 'center' }}>What We Offer!</h2>

              <ul><strong>
                <center>

                <img src="https://media.discordapp.net/attachments/1123159642638393397/1156515811595407432/doctor.png?ex=651540c8&is=6513ef48&hm=a22286d1e2537d8d445fe8be1c3725aa159b8b2299f25101d05fd90df1e2b028&" width="70%" alt="Home Icon" />
                  <li>QR Scan Prescription</li>
                  <li>Customer Support</li>
                  <li>Emergency Contraception</li>
                </center>
              </strong></ul>
            </div>
            <div className="department2">
              <h2 style={{ textAlign: 'center' }}>Best Doctors </h2>

              <ul><strong>
                <center>
                  <img src="https://media.discordapp.net/attachments/1123159642638393397/1156515811595407432/doctor.png?ex=651540c8&is=6513ef48&hm=a22286d1e2537d8d445fe8be1c3725aa159b8b2299f25101d05fd90df1e2b028&" width="70%" alt="About Icon" />
                  <li>Surgeon</li>
                  <li>Dentist</li>
                  <li>Gynecologist</li>
                  <li>Orthologist</li>
                  {/* <li>Lungs specialist</li>
                  <li>kidney specialist</li> */}
                </center>
              </strong></ul>
            </div>
            <div className="department3">
              <h2 style={{ textAlign: 'center' }}>Up To Date</h2>

              <ul><strong>
                <center>
                  <img src="https://media.discordapp.net/attachments/1123159642638393397/1156515811595407432/doctor.png?ex=651540c8&is=6513ef48&hm=a22286d1e2537d8d445fe8be1c3725aa159b8b2299f25101d05fd90df1e2b028&" width="70%" alt="Book Icon" />
                  <li>Reliable Services</li>
                  <li>24-7 Availability</li>
                  <li>Medicine at ease</li>
                  <li>End to End Security</li>
                  <li>Customer Care Support</li>
                </center>
              </strong></ul>
            </div>
          </div>
          <br />

          <div id="scroll" className="abo">
            <br />
            <h1 className="welcome-text" style={{ width: '25%', marginLeft: '2%' }}>about us</h1>
            <br />

            <h2 style={{ marginLeft: '2%', marginTop: '3%' }}>Best Medical & Health care Needs to Our Patients</h2>
            <div className="about-box" style={{ margin: 0 }}>
              <div>
                <p>
                  we provide the best medicines the benefits of medicines are the helpful effects you get when you use them, such as lowering blood pressure, curing infection, or relieving pain.
                </p>
                <br />
                <p>
                  the risks of medicines are the chances that something unwanted or unexpected could happen to you when you use them, that's why each and everything is controlled in a proper manner and maintained.
                </p>
              </div>
              <div>
                <img src="https://media.discordapp.net/attachments/1123159642638393397/1156515811595407432/doctor.png?ex=651540c8&is=6513ef48&hm=a22286d1e2537d8d445fe8be1c3725aa159b8b2299f25101d05fd90df1e2b028&" className="img5" alt="Medicine Image" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default HomePagee;
