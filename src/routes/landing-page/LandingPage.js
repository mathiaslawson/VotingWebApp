import React from 'react'
import girl_picture from './picture1.png';
import { Container, Row, Col} from "react-bootstrap";
import "./LandingPage.css"


export default function landingpage() {

  const buttons = {
    register: <button className='register-button' class="register-button">Register as a voter</button>
  }


const buttons_conatiner = <div className='landing-buttons-container'>
  {buttons.register}
</div>

const part1 = <Container fluid>
      <div class="part1">
<img class="picture1" src={girl_picture} /> 
<div className='writing-container'>
<h2 class="part1-writing">Fast, Secured and <br />Accessible Voting System</h2>

<div class="part1-sub">
Voting made easy for you. This website is designed to ensure<br />
 a secured voting session for every student

 {buttons_conatiner}
</div>
</div>
 </div>

    </Container>



  return (
    <div> 
          {part1}
    </div>
  )
}