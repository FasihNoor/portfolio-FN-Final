import { Container, Row, Col } from 'react-bootstrap'
import Marquee from "react-fast-marquee";
import { skillsData } from '../data/SkillsData';
import { skillsImage } from '../utils/SkillsImage';
import "../pages/style.css";


function Aboutpage() {
    return (
        <div className='aboutpagebackground'>
            <Container>
                <Row className='textbackground'>
                    <Col md={7} >
                        <h3 className='aboutmetext'>About <span>Me</span></h3>
                        <p className='aboutdetails'> I am a dedicated student at the University of Waterloo, pursuing a degree in Computer Engineering. My academic journey has not only equipped me with a solid technical background but has also fueled my passion for software development. The intricacies of building dynamic websites and innovative mobile applications have always captivated me. </p> 
                        <p className='aboutdetails'> Drawing from my prior work experience as a Software Engineer at Ford and a Software QA Analyst at Siemens, I have gained invaluable insights into the industry's demands for both cutting-edge technology and uncompromising quality. With a strong foundation in both engineering and quality assurance, I am dedicated to crafting seamless and reliable digital experiences. My journey is fueled by a commitment to continuous learning and a drive to create solutions that make a meaningful impact. </p> 
                        <div className="skillsContainer">
                            <div className="skill--scroll">
                                <Marquee
                                    gradient={false}
                                    speed={60}
                                    pauseOnClick={true}
                                    delay={0}
                                    play={true}
                                    direction="left"
                                >
                                    {skillsData.map((skill, id) => (
                                        <div className="skill--box" key={id} >
                                            <img className='skill-image' src={skillsImage(skill)} alt={skill} />
                                            <p>{skill}</p>
                                        </div>
                                    ))}
                                </Marquee>
                            </div>
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="webimage"></div>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}

export default Aboutpage