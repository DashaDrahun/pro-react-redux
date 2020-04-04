import React, { Component } from "react";
import { SwapiServiceConsumer } from "../swapi-service-context/swapi-service-context";

const withSwapiService = Wrapped => {
  return props => {
    return (
      <SwapiServiceConsumer>
        {swapiservice => {
          return <Wrapped {...props} swapiservice={swapiservice} />;
        }}
      </SwapiServiceConsumer>
    );
  };
};

export default withSwapiService;
