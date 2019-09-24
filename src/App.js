import React from 'react';
import './App.css';
import Table from './Component/Table';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      dateOfBirth: 'July 10, 1997',
      gender: 'Male',
      phone: '0905932654',
      email: 'Thanh.tran150020@vnuk.edu.vn',
      location: 'Da Nang, Vietnam',
      link: 'https://www.facebook.com/viet.thanh.3767'
    }
  }
  
  render() {
    return (
      <div class="wrap">
        <div class="row">
          <div class="name">
            <h1>Tran Viet Thanh</h1>
            <h2>Web developer</h2>
          </div>
          <div class="info">
            <p>{this.state.dateOfBirth}</p>
            <p>{this.state.gender}</p>
            <p>{this.state.phone}</p>
            <p>{this.state.email}</p>
            <p>{this.state.location}</p>
            <p>{this.state.link}</p>
          </div>
        </div>

        <h3 class="heading-3">//OBJECTIVE</h3>
        <div class="row">
          <p>Take advantages of Web Developer to become a professional front-end developer and bring value to customers.
            From that, I will contribute to front-end development of your company.</p>
        </div>

        <h3 class="heading-3">//WORK EXPERIENCE</h3>
        <div class="row">
          <div class="company">
            <p class="text-pink">Center of Statistical Informatics Services No 3 </p>
            <p>February 2018 - July 2018</p>
          </div>
          <div class="role">
            <p class="text-blue">Web developer</p>
            <p>Main responsibilities:</p>
            <p>- Coding for upload and manage residential information of Central of Vietnam.</p>
            <p>- Design web admin page.</p>
            <p>Recognition and Gains:</p>
            <p>- Learn to use new technology to interact with data(Entity Framework, C#, ASP.Net).</p>
            <p>- Managing data major.</p>
          </div>
        </div>
        <div class="row">
          <div class="company">
            <p class="text-pink">Sun* Inc (Framgia Inc)</p>
            <p>March 2019 - July 2019</p>
          </div>
          <div class="role">
            <p class="text-blue">Front-end developer</p>
            <p>Main responsibilities:</p>
            <p>- PSD to HTML CSS Conversion</p>
            <p>- Learning Javascript</p>
            <p>Recognition and Gains:</p>
            <p>- New programming language, new template engine, new technique.</p>
          </div>
        </div>

        {/*Comment: Table component  */}
        <Table />

        <div class="row">
          <div class="education">
            <h3 class="heading-3">//EDUCATION</h3>
            <p class="text-pink">Institute for Research & Excutive Education VN-UK</p>
            <p class="text-blue">Major: Computer Science & Engineering</p>
            <p>2015 - present</p>
          </div>
          <div class="certification">
            <h3 class="heading-3">//CERTIFICATIONS</h3>
            <p class="text-pink">International English Language Testing System</p>
            <p class="text-blue">IELTS: 5.5 overall</p>
          </div>
        </div>
      </div>
    )
  };
}



export default App;
