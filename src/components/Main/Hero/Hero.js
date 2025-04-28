import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import Anime, { anime } from 'react-anime';
//import { navDelay, loaderDelay } from '@utils';
//import { usePrefersReducedMotion } from '@hooks';

const StyledHeroSection = styled.section`
 
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 5px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
   
    margin-top: 50px;
  }
`;

const Hero = () => {
    const [isMounted, setIsMounted] = useState(false);


    const one = <h1>Hi, my name is</h1>;
    const two = <h2 className="big-heading"></h2>;
    const three = <h3 className="big-heading"></h3>;
    const four = (
        <>
            <p>

            </p>
        </>
    );
    const five = (
        <div className='email-link-btn'>
        </div>
    );

    const items = [one, two, three, four, five];

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <StyledHeroSection>
            {true ? (
                <Anime
                    opacity={[0, 1]}
                    translateY={[20, 0]}
                    easing="easeInOutQuad"
                    duration={700}
                    delay={anime.stagger(100)}
                >
                    {items.map((item, i) => (
                        <div key={i}>{item}</div>
                    ))}
                </Anime>
            ) : (
                <TransitionGroup component={null}>
                    {isMounted && (
                        <Anime
                            opacity={[0, 1]}
                            translateY={[20, 0]}
                            easing="easeInOutQuad"
                            duration={700}
                            delay={anime.stagger(100)}
                        >
                            {items.map((item, i) => (
                                <CSSTransition key={i} classNames="fadeup">
                                    <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
                                </CSSTransition>
                            ))}
                        </Anime>
                    )}
                </TransitionGroup>
            )}
        </StyledHeroSection>
    );
};

export default Hero;