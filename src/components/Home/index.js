import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-a.png';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import Loader from 'react-loaders';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const fnameArray = ['E','t', 'h', 'a', 'n'];
    const lnameArray = ['','G','i','b','e','a','u']
    const jobArray = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'E', 'n', 'g', 'i', 'n', 'e', 'e', 'r']

    useEffect( () => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])


    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <AnimatedLetters letterClass={letterClass} 
                strArray={fnameArray} 
                idx={15} />
                <AnimatedLetters letterClass={letterClass} 
                strArray={lnameArray} 
                idx={18} />
                <br />
                <AnimatedLetters letterClass={letterClass} 
                strArray={jobArray} 
                idx={18} />

                </h1>
                <h2>Game Development | Front-End Engineer </h2>
                <h2>C++ | Javascript | Python</h2>
                
                <a href="https://docs.google.com/document/d/1ObzNSpFv-xrCeqtwrQBx3L6tdrsW2hHA/edit?usp=sharing&ouid=115402545637950883025&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" className='flat-button2'>VIEW RESUME</a>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                


            </div>
        </div>
        <Loader type="ball-spin-fade-loader" />
        </>
    
    );
}

export default Home