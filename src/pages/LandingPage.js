import React, { useState, useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import { Grid } from 'semantic-ui-react';
import { ReactComponent as Svg1 } from '../assets/vectors/codinganimate.svg';
import { ReactComponent as Svg2 } from '../assets/vectors/software-engineer.svg';
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
      <Container>
        <Grid columns={2} padded="vertically" className="landingContainer">
          <Grid.Column width={9}></Grid.Column>
          <Grid.Column width={7} className="vectorContainer">
            {alternate ? (
              <div className="animate__animated animate__fadeIn">
                <Svg1 />
              </div>
            ) : (
              <div className="animate__animated animate__fadeInRight">
                <Svg2 />
              </div>
            )}
          </Grid.Column>
        </Grid>
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
