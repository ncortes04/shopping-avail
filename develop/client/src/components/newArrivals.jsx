import React, {useState, useEffect, useRef} from "react";
import '../styles/newArrivals.css'
function NewArrival({header, content, position, img}) {
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef(null);
    
  
    useEffect(() => {
      function handleScroll() {
        if (containerRef.current) {
          const { top, bottom } = containerRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const windowWidth = window.innerWidth
          if (windowWidth <= 750 && top < windowHeight && bottom > windowHeight) {
            setIsVisible(true);
          } 
          if(top < windowHeight /2 && bottom > windowHeight /2) {
            setIsVisible(true)
          }
        }
      }
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  const containerStyle = {
    transform: isVisible ? 'translateY(0)' : 'translateY(100px)',
    opacity: isVisible ? '1' : '0',
    transition: 'all 1s ease-out',
    position: 'relative',
    top: 0,
    left: 0,
  };
    return (
            <div className={`arrivals-content-div ${position}`}>
                <div className="arrivals-content-container" >
                   <div className="arrivals-text"  ref={containerRef} style={containerStyle}>
                   <h3>{header}</h3>
                    <p>{content}</p>
                   </div>
                </div>
                <div className="arrivals-content-container-image"  ref={containerRef} style={containerStyle}>
                    <img className="stock-photo" src={img}/>
                </div>
            </div>
    )
}

export default NewArrival