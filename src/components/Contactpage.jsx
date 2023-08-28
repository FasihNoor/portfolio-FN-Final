import { Container } from "react-bootstrap";
import "../pages/style.css";

function Contactpage() {
  return (
    <div className="contactbackground">
      <Container>
        <h2 className="contacthead">Get In Touch</h2>
        <p className="contactpara">
          I’m currently searching for winter internship opportunities for a Software Enginner or a Software QA
          role. <br /> Feel free to reach out. 
          <br /> Whether you have any further questions or just want to say hi, <br />
          I’ll try my best to get back to you!
        </p>
        <button
          className="contactbtn"
          onClick={() => {
            window.open("https://www.linkedin.com/in/fasihnoor/");
          }}
        >
          Contact Fasih
        </button>
        <span></span>
        <p className="copyright">
          © Copyright 2023
          <hr />
          Designed & Built by <span>fasihnoor</span>
        </p>
      </Container>
    </div>
  );
}

export default Contactpage;