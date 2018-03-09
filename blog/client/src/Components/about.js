import React from 'react';
// import { Grid, Col, Media } from 'react-bootstrap';

const About = () => {
    const content = {
        textAlign: 'start',
      };
      const imageContainer = {
        alignSelf: 'center',
        maxWidth: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '10px',
      };
      const quote = {
        fontSize:18
      };
      const image = {
        width: '80%',
        padding: '10px',
        maxWidth: '600px'
      };

    return (
        <div className="about container">
            <div className="about-header-container">
                <h1>About VincentCastigliolaIII.com</h1>
            </div>
            {/* <img src={} /> */}
            <div style={content}>
                
                <p>Welcome to VincentCastigliolaIII.com - a blog dedicated to helping new programmers and young adults searching to become the best versions of themselves.
                </p>
                <div style={imageContainer}>
                    <div style={image}>
                        {/* <img src={(require('../img/ernest.jpg'))} alt="Ernest Hemingway"/> */}
                        <p style={quote}>"There is nothing noble in being superior to your fellow man; true nobility is being superior to your former self." - Hernest Hemingway
                        </p>
                    </div>
                </div>
                <div className="about-header-container">
                <h1>About Vincent</h1>
                </div>
                <p>After graduating from the University of Mississippi with a liberal arts degree, I spent the next several years traveling around, working non-skilled jobs, and contemplating what I was going to do with the rest of my life. It wasn’t until I was 28 years old that I had finally realized what I wanted to do.
                </p>
                <p>While living in New Orleans, I decided to learn how to code by recommendation from a coworker. I started with HTML and CSS. Then moved on to Java, C, Python, and JavaScript. I was immediately hooked and was filled with questions like “What is the difference between front-end and back-end?”, “What’s the difference between a framework and a library”, and “How in the world can I make a career out of this?”. 
</p>
<p>With all the online sources available out there, the self-taught path for learning software development was very appealing. However, I strongly felt the need to surround myself with other developers, and I really wanted to expand my knowledge in web and mobile development. After weighing my options, I decided to attend a coding bootcamp called DevMountain that I had heard so much about. It turned out to be one of the best decisions I had made. 
                </p>
            </div>
        </div>
    )
}

export default About;