import React from "react";
import ItemDetails, { Record } from "../item-details/item-details";
import withSwapiService from "../hoc-helpers/with-swapi-service";

const PlanetDetails = ({ itemId, swapiservice }) => {
  const { getPlanet, getPlanetImage } = swapiservice;

  return (
    <ItemDetails
      itemId={itemId}
      getData={getPlanet}
      getImageUrl={getPlanetImage}
    >
      <Record field="population" label="Population"></Record>
      <Record field="rotationPeriod" label="Rotation Period"></Record>
    </ItemDetails>
  );
};

export default withSwapiService(PlanetDetails);
