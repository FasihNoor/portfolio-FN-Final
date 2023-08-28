import ProjectCard from "../components/Projectcard";
import { Container, Row, Col } from "react-bootstrap";
import netfliximage from "/src/Assets/images/netflix.jpg";
import todolist from "/src/Assets/images/todolist.png";
import natours from "/src/Assets/images/natours.png";
import "../pages/style.css";


function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={netfliximage}
                isBlog={false}
                title="Netflix-Clone"
                description="This project is a simplified front-end clone of Netflix. It was created with React js. It uses TMDB (The Movie Data Base ) API and uses the Axios tool. Users can click movie images with embedded YouTube trailers or related videos about the movie."
                ghLink="https://react-netflixweb-clone.netlify.app/"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={natours}
                isBlog={false}
                title="NATOURS Web App"
                description=" A project that simplifies making reservations and managing them. Different login authentications and roles were integrated and a full payment processing system was added using Stripe. Developed using advanced Node.js, Express, and MongoDB. "
                ghLink="https://github.com/FasihNoor/Natours"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={todolist}
                isBlog={false}
                title="Claims Handler"
                description=" To-Do-List App that will allow a user to add a task to a list of to-do items for their assigned claims. Once the task is added, the user will be able to delete it as completed once it has done. A new to-do-list can be created for a different claim. I developed this to assist me with my first co-op position at Gore Mutual Insurance."
                ghLink="https://github.com/FasihNoor/todolist-V2"
              />
            </Col>

          </Row>
        </Container>
      </Container>
    </div>
  );
}
export default Projectlist;