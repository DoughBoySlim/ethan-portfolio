import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import { ChevronDown, ChevronUp } from 'lucide-react';
//import 'loaders.css/src/animations/ball-rotate.scss';

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate');
    
    const [openDropdowns, setOpenDropdowns] = useState({
        goodThunder: false,
        nextGen: false,
        patrolCam: false,
        talentTrack: false
    })

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const toggleDropdown = (key) => {
        setOpenDropdowns(prevState => ({
            ...prevState,
            [key]: !prevState[key]
        }));
    };

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
                I have experience working on client-based projects through my program at Minnesota State University, projects are listed below. 
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
                        <div className="good-thunder-dropdown">
                            <div className="gt-header" onClick={() => toggleDropdown('goodThunder')}>
                                <h2>Good Thunder Press</h2>
                                {openDropdowns.goodThunder ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                            </div>
                            {openDropdowns.goodThunder && (
                                <div className="gt-content">
                                    <p><strong>Role:</strong> Software Development Lead</p>
                                    <p><strong>Team Size:</strong> 3 Developers</p>
                                    <p><strong>Project Duration:</strong> August - December 2023</p>
                                    <p>
                                        Led the development of an iOS mobile application for Good Thunder Press, a publishing company supporting scientists and artists. 
                                        The app is designed for musicians—both amateurs and professionals—to create, manage, and play songs with chord progressions, rhythmic patterns, and transposition features.
                                    </p>
                                    <ul>
                                        <li><strong>Technical Leadership:</strong> Guided the team in selecting development tools and methodologies for iOS.</li>
                                        <li><strong>Feature Development:</strong> Implemented chord progression entry, lyric alignment, and automatic transposition.</li>
                                        <li><strong>UI/UX Implementation:</strong> Translated wireframes into an interactive, user-friendly mobile experience.</li>
                                        <li><strong>Testing & Optimization:</strong> Developed and executed prototype tests to ensure stability and usability.</li>
                                        <li><strong>Collaboration:</strong> Worked with the CEO and music industry experts to align development with user needs.</li>
                                    </ul>
                                    <p>This project resulted in a working iOS prototype that laid the foundation for future cloud-integrated versions.</p>
                                </div>
                            )}
                        </div>
                        <div className="next-gen-dropdown">
                            <div className="ng-header" onClick={() => toggleDropdown('nextGen')}>
                                <h2>Next Gen RF Design</h2>
                                {openDropdowns.nextGen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                            </div>
                            {openDropdowns.nextGen && (
                                <div className="ng-content">
                                    <p><strong>Role:</strong> Testing Lead</p>
                                    <p><strong>Team Size:</strong> 4 Developers</p>
                                    <p><strong>Project Duration:</strong> January - May 2024 </p>
                                    <p>
                                    I served as the Testing Lead for the NextGen RF GUI Updates project, 
                                    focusing on enhancing the Viper Route Generator (VRG), a software tool used to configure 
                                    wireless radio modems for critical communication networks in industries such as oil, gas, and, electric grid monitoring.
                                    </p>
                                    <ul>
                                        <li><strong>Test Planning & Execution:</strong> Developed and implemented a comprehensive test plan to validate new features, including session import/export functionality and drag-and-drop route manipulation.</li>
                                        <li><strong>GUI Validation:</strong> Conducted thorough UI/UX testing to ensure an intuitive and efficient user experience.</li>
                                        <li><strong>Functionality & Performance Tracking:</strong> Verified the integrity of routing rule enforcement and network configuration logic.</li>
                                        <li><strong>Bug Tracking & Debugging:</strong> Identified, documented, and collaborated with developers to resolve critical issues.</li>
                                        <li><strong>Deployment & Documentation:</strong> Assisted in final testing of the installable executable and contributed to the creation of installation and support documentation.</li>
                                    </ul>
                                    <p>This project resulted in a more user-friendly and functional GUI, streamlining the configuration process for NextGen RF’s wireless communication devices.</p>
                                </div>
                            )}
                        </div>
                        <div className="patrol-cam-dropdown">
                            <div className="pc-header" onClick={() => toggleDropdown('patrolCam')}>
                                <h2>Patrol Cam</h2>
                                {openDropdowns.patrolCam ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                            </div>
                            {openDropdowns.patrolCam && (
                                <div className="pc-content">
                                    <p><strong>Role:</strong> Team Lead</p>
                                    <p><strong>Team Size:</strong> 4 Developers</p>
                                    <p><strong>Project Duration:</strong> August - December 2024 </p>
                                    <p>
                                    I led the development team for the PatrolCam web application, an AI-powered surveillance platform designed to 
                                    enhance law enforcement capabilities through real-time video analysis. Enabling law enforcement agencies to monitor and track flagged vehicles efficiently.
                                    </p>
                                    <ul>
                                        <li><strong>Leadership & Support:</strong> Provided technical guidance and mentorship to team members, ensuring smooth development and problem-solving.</li>
                                        <li><strong>Full-Stack Development:</strong> Contributed to both front-end and back-end development using React, Node.js, and MongoDB.</li>
                                        <li><strong>User Management System:</strong> Designed and implemented authentication and user onboarding features for clients.</li>
                                        <li><strong>Bug Tracking & Debugging:</strong> Identified, documented, and collaborated with developers to resolve critical issues.</li>
                                        <li><strong>Deployment & Documentation:</strong> Led the deployment of the live web application and contributed to technical documentation for future development.</li>
                                    </ul>
                                    <p>This project successfully demonstrated the intersection of AI, user management system, and law enforcement, creating a scalable and intuitive surveillance solution.</p>
                                </div>
                            )}
                        </div>
                        <div className="talent-track-dropdown">
                            <div className="tt-header" onClick={() => toggleDropdown('talentTrack')}>
                                <h2>Talent Track (In Progress) </h2>
                                {openDropdowns.talentTrack ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                            </div>
                            {openDropdowns.talentTrack && (
                                <div className="tt-content">
                                    <p><strong>Role:</strong> AI Integration / Testing Lead </p>
                                    <p><strong>Team Size:</strong> 4 Developers</p>
                                    <p><strong>Project Duration:</strong> January 2025 - Present </p>
                                    <p>
                                    I led the AI integration and testing efforts for the Wizard Board application, a communication and scheduling platform aimed at enhancing collegiate athletic recruitment. This project leveraged AI to streamline the management of prospective student-athlete (PSA) contacts, helping coaches organize recruitment processes more effectively.
                                    </p>
                                    <ul>
                                        <li><strong>AI Integration:</strong> Developed and implemented AI-driven automation to extract sport-specific metrics from recruitment emails, generating organized contact lists for coaches.</li>
                                        <li><strong>Data Management</strong> Designed and tested the system for deduplication and efficient handling of PSA data, ensuring accuracy and consistency across multiple users.</li>
                                        <li><strong>Scheduling & Ranking System:</strong> Contributed to the creation of a dynamic scheduling interface, enabling coaches to rank players and sort schedules by date and athlete level.</li>
                                        <li><strong>User Experience:</strong> Ensured a clean, intuitive interface, providing coaches with instant access to new PSA updates upon login.</li>
                                        <li><strong>Testing & Quality Assurance:</strong> Led rigorous testing cycles to validate data extraction accuracy, system performance, and overall reliability.</li>
                                    </ul>
                                    <p>This project empowered college coaches to manage large volumes of recruitment inquiries, rank athletes efficiently, and streamline communication — transforming the recruitment process into a more organized and automated experience.</p>
                                </div>
                            )}
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