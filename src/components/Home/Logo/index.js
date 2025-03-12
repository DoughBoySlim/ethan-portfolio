import './index.scss'
import LogoA from '../../../assets/images/gamedev.png'
import { useEffect, useRef } from 'react';
import DrawSVGPlugin from 'gsap/all';
import gsap from 'gsap';

const Logo = () => {

    const bgRef = useRef();
    const outlineLogoRef = useRef();
    const solidLogoRef = useRef();

    useEffect(() => {
        gsap.registerPlugin(DrawSVGPlugin)

        gsap.timeline()
        .to(bgRef.current, {
            duration: 1,
            opacity: 1
        })
        .from(outlineLogoRef.current, {
            drawSVG: 0,
            duration: 2,
        })
        
        gsap.fromTo(
            solidLogoRef.current,
            {
                opacity: 0,
            },
            {
                opacity: 1,
                duration: 4,
                delay: 4,
            }
        )
    }, [])

    {/* one holds logo, other one is transparent*/}
    return ( 
        <div className="logo-container" ref={bgRef}>
            <img ref={solidLogoRef} className="solid-logo" src={LogoA} alt="a"/>
                <svg
                    width="500px"
                    height="500px"
                    version="1.1"
                    viewBox="0 0 500 500"
                    xmlns="http://www.w3.org/2000/svg"
                    //xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                    <g
                    className='svg-container'
                    stroke="none"
                    transform="translate(0 457) scale(.1 -.1)"
                    fill="none"
                    >
                    </g>
                </svg>
        </div>
    )
}

export default Logo;




