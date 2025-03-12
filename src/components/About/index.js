import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import goodThunderPicture from '../../assets/images/goodThunder.png'
//import 'loaders.css/src/animations/ball-rotate.scss';

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters letterClass={letterClass}
                    strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                    idx={15}
                    />
                </h1>
                <p>
                I'm a dedicated Senior Computer Science Student with a strong focus on learning and applying technical skills. 
                I actively engage in online learning and hands-on projects, including Web App Development using Angular, .NET, and JavaScript.
                </p>

                <p>
                I have experience woring on client-based projects through my program at Minnesota State University, projects are listed below. 
                </p>

                <p>
                I'm committed to staying updated with the latest technology trends through tutorials and self-directed exploration.I have an unwavering drive to learn and create, and I'm eager to find opportunities to innovate, 
                collaborate, and make a positive impact on the world.
                </p>
            </div>
            <div className="project-zone">
                <div className="school-projects">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['S','c','h','o','o','l',' ','P','r','o','j','e','c','t','s']}
                            idx={15}
                        />
                    </h1>
                    <div className="list-s-projects">
                        <div className="good-thunder">
                            <h2>
                                Good Thunder Press
                            </h2>
                        </div>
                        <div className="next-gen">
                            <h2>
                                Next Gen RF Design
                            </h2>
                        </div>
                        <div className="patrol-cam">
                            <h2>
                                Patrol Cam
                            </h2>
                        </div>
                        <div className="talent-track">
                            <h2>
                                Talent Track (In Progress)
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="personal-projects">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['P','e','r','s','o','n','a','l',' ','P','r','o','j','e','c','t','s']}
                            idx={18}
                        />
                    </h1>
                    <div className="list-p-projects">
                        <div className="caustic-war">
                            <h2>
                                Caustic Warfare
                            </h2>
                        </div>
                        <div className="ethan-casino">
                            <h2>
                                Ethan's Casino
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Loader type="ball-spin-fade-loader"/>
        </>
    )
}

export default About;