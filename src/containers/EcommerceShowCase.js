import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Container } from 'semantic-ui-react';

import './index.scss';

const EcommerceShowCase = () => {
  return (
    <div className="ecommerceContainer">
      <Grid divided="vertically">
        <Grid.Row columns={2}>
          <Container>
            <div>
              <h2>Fastest and Open Source Technology</h2>
              <p>
                Type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem
                Ipsum.
              </p>
            </div>
          </Container>
          <Grid.Column>{/* you tube section */}</Grid.Column>
          <Grid.Column className="rightSide">
            <p className="title">Consumption History</p>
            <p className="description">
              Consuming various SAP products has just become easier. On the SAP API Business Hub, you can view various integration packages and
              workflow management packages. If the package is what you need, just configure a workspace, add the package you want to work with to it,
              and you can begin consuming it productively right away!
            </p>
            <button className="btn-primary"> Consumption History </button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default EcommerceShowCase;
