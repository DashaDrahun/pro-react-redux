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

export default withSwapiService(PersonDetails);
