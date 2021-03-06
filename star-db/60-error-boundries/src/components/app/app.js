import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorIndicator from "../error-indicator";
import ItemDetails, { Record } from "../item-details/item-details";
import ItemList from "../item-list";
import SwapiService from "../../services/swapi-service";
import { SwapiServiceProvider } from "../swapi-service-context/swapi-service-context";
import PlanetDetails from "../sw-components/planet-details";
import StarshipDetails from "../sw-components/starship-details";
import PersonDetails from "../sw-components/person-details";

import "./app.css";
import Row from "../row/row";
import { PersonList, StarshipList, PlanetList } from "../sw-components";

export default class App extends Component {
  state = {
    showRandomPlanet: true,
    hasError: false
  };

  swapiService = new SwapiService();

  toggleRandomPlanet = () => {
    this.setState(state => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      };
    });
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

    const {
      getPerson,
      getStarship,
      getPersonImage,
      getStarshipImage,
      getAllPeople,
      getAllPlanets
    } = this.swapiService;

    const personDetails = (
      <ItemDetails itemId={11} getData={getPerson} getImageUrl={getPersonImage}>
        <Record field="gender" label="Gender"></Record>
        <Record field="eyeColor" label="Eye Color"></Record>
      </ItemDetails>
    );

    const starshipDetails = (
      <ItemDetails
        itemId={5}
        getData={getStarship}
        getImageUrl={getStarshipImage}
      >
        <Record field="model" label="Model"></Record>
        <Record field="length" label="Length"></Record>
      </ItemDetails>
    );

    return (
      <div className="stardb-app">
        <SwapiServiceProvider value={this.swapiService}>
          <Header />
          <Row left={personDetails} right={starshipDetails}></Row>

          <PersonDetails itemId={11} />
          <PlanetDetails itemId={5} />
          <StarshipDetails itemId={9} />

          <PersonList />

          <StarshipList />

          <PlanetList />
        </SwapiServiceProvider>
      </div>
    );
  }
}
