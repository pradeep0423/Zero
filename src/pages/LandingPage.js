import React, { useState, useEffect } from 'react';
import { Container, Button } from 'semantic-ui-react';
import { Grid } from 'semantic-ui-react';
import { ReactComponent as Svg1 } from '../assets/vectors/codinganimate.svg';
import { ReactComponent as Svg2 } from '../assets/vectors/code-typing-animate.svg';
import TechCardContainer from '../containers/TechCardContainer';
import './LandingPage.scss';
import 'animate.css';
import Footer from './footer/Footer';
import EcommerceShowCase from '../containers/EcommerceShowCase';

const LandingPage = (props) => {
  const [alternate, setAlternate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (alternate) {
        setAlternate(false);
      } else {
        setAlternate(true);
      }
    }, 6000);

    return () => clearInterval(interval);
  }, [alternate]);

  return (
    <>
      <Container className="landingPage" fluid>
        <Container className="landing">
          <Grid columns={2} padded="vertically" className="landingContainer">
            <Grid.Column width={9}>
              <div className="alignBannerText">
                {/* <h1 className="bannerTitle">ATREYA</h1> */}
                <h3 className="bannerTitle">One stop for your E-commerce product</h3>
                <p className="taglineText">
                  We deal with the end-to-end solution for all your e-commerce needs, like pharmacy, food, grocery, travel, and many more. We have
                  specialization in delivering high-quantity and aesthetic UI/UX websites and backend systems.
                </p>
                <Button style={{ color: '#273339', background: 'rgb(114 172 130)' }}>Learn More</Button>
                <Button inverted color="olive">
                  Contact Us for Demo
                </Button>
              </div>
            </Grid.Column>
            <Grid.Column width={7} className="vectorContainer">
              {alternate ? (
                <div className="animate__animated animate__fadeIn">
                  <Svg1 />
                </div>
              ) : (
                <div className="animate__animated animate__fadeIn animate__delay-1s">
                  <Svg2 />
                </div>
              )}
            </Grid.Column>
          </Grid>
        </Container>
      </Container>
      <Container className="technology" fluid>
        <Container>
          <TechCardContainer />
        </Container>
      </Container>
      <Container className="ecommerceShowCase" fluid>
        <Container>
          <EcommerceShowCase />
        </Container>
      </Container>
      <Footer />
    </>
  );
};

export default LandingPage;
