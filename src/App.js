import React from 'react';
import './App.css';
import Table from './Component/Table';
import Objective from './Component/Objective';
import WorkExperience from './Component/WorkExperience';

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

  updateInfo(){
    this.setState((prevState, props) => {

      return {
        
        //ở đây có thể sử dụng prevState + 'fixed' để  thay đổi dữ 
        //liệu như bên dưới thay vì truyền thẳng 1 chuỗi như phone email...
        dateOfBirth: prevState.dateOfBirth + ' fixed',
        gender: prevState.gender + ' fixed',
        phone: '0905932654 fixed',
        email: 'Thanh.tran150020@vnuk.edu.vn fixed',
        location: 'Da Nang, Vietnam fixed',
        link: 'https://www.facebook.com/viet.thanh.3767 fixed'
      };
    })
  }
  
  render() {
    

    return (
      <div class="wrap">
        <div class="row">
          <div class="name">
            <h1>Tran Viet Thanh</h1>
            <h2>Web developer</h2>
            <button type="" onClick = {() => this.updateInfo()}>updateInfo</button>
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

        {/*Comment: Objective component  */}
        <Objective />

        {/*Comment: Work Experience component */}
        <WorkExperience/>

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
