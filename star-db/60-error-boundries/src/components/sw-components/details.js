import React from "react";
import ItemDetails, { Record } from "../item-details/item-details";
import withSwapiService from "../hoc-helpers/with-swapi-service";

const PersonDetails = ({ itemId, swapiservice }) => {
  const { getPersonImage, getPerson } = swapiservice;

  return (
    <ItemDetails
      itemId={itemId}
      getData={getPerson}
      getImageUrl={getPersonImage}
    >
      <Record field="gender" label="Gender"></Record>
      <Record field="eyeColor" label="Eye Color"></Record>
    </ItemDetails>
  );
};

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

const StarshipDetails = ({ itemId, swapiservice }) => {
  const { getStarship, getStarshipImage } = swapiservice;

  return (
    <ItemDetails
      itemId={itemId}
      getData={getStarship}
      getImageUrl={getStarshipImage}
    >
      <Record field="model" label="Model"></Record>
      <Record field="length" label="Length"></Record>
    </ItemDetails>
  );
};

export { PersonDetails as withSwapiService(PersonDetails), 
    PlanetDetails as withSwapiService(PlanetDetails),
    StarshipDetails as withSwapiService(StarshipDetails)
}
