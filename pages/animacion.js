import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const animacion = () => {
    const div1 = useRef(null);
    let timeline = useRef(null);

    useEffect(() => {
        console.log(div1.current)
        timeline.current = gsap.timeline({paused:false, repeat: 3, repeatDelay: 1})

        timeline.current.to(div1.current, { duration: 3, opacity: 0, right: '-50px' })
        .to('.cajas', 2, {opacity:0, stagger: 0.3})
        // .to("#caja", 2, {opacity:0, top:'-150px'})
        
        
        

    }, [])


    return (
        <div>
            <div style={{ color: '#3f3', background: 'green', width: 300, height: 300, position: 'relative' }} ref={div1}></div>
            <div className="cajas" style={{background:'blue', width:100, height:100, border:'2px solid red'}}></div>
            <div className="cajas" style={{background:'blue', width:100, height:100, border:'2px solid red'}}></div>
            <div className="cajas" style={{background:'blue', width:100, height:100, border:'2px solid red'}}></div>
            
        </div>
    )
}
export default animacion;
