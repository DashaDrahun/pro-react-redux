import React from "react";
import SwapiService from "../../services/swapi-service";
import ItemDetails, { Record } from "../item-details/item-details";

const swapiService = new SwapiService();

const {
    getPerson,
    getStarship,
    getPlanet,
    getPersonImage,
    getStarshipImage,
    getPlanetImage
} = swapiService;

const PersonDetails = ({ itemId }) => {
    return (
        <ItemDetails itemId={itemId} getData={getPerson} getImageUrl={getPersonImage}>

            <Record field="gender" label="Gender"></Record>
            <Record field="eyeColor" label="Eye Color"></Record>
        </ItemDetails>
    )
};

const PlanetDetails = ({ itemId }) => {
    return (
        <ItemDetails
            itemId={itemId}
            getData={getPlanet}
            getImageUrl={getPlanetImage}
        >
            <Record field="population" label="Population"></Record>
            <Record field="rotationPeriod" label="Rotation Period"></Record>
        </ItemDetails>
    )
};

const StarshipDetails = ({ itemId }) => {
    return (
        <ItemDetails
            itemId={itemId}
            getData={getStarship}
            getImageUrl={getStarshipImage}
        >
            <Record field="model" label="Model"></Record>
            <Record field="length" label="Length"></Record>
        </ItemDetails>
    )
};

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
}