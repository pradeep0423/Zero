import React, { useState, useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import { Grid } from 'semantic-ui-react';
import { ReactComponent as Svg1 } from '../assets/vectors/codinganimate.svg';
import { ReactComponent as Svg2 } from '../assets/vectors/software-engineer.svg';
import 'animate.css';

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
    <Container>
      <Grid columns={2} padded="vertically">
        <Grid.Column></Grid.Column>
        <Grid.Column>
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
  );
};

export default LandingPage;
