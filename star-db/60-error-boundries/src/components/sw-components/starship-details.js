import React from "react";
import ItemDetails, { Record } from "../item-details/item-details";
import withSwapiService from "../hoc-helpers/with-swapi-service";

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

export default withSwapiService(StarshipDetails);
