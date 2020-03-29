import React, { Component } from "react";

import ItemList from "../item-list/item-list";
import ItemDetails from "../item-details/item-details";
import SwapiService from "../../services/swapi-service";
import Row from "../row/row";
import ErrorBoundry from "../error-boundry/error-boundry";

import "./people-page.css";

export default class PeoplePage extends Component {
  state = {
    selectedPerson: 3
  };

  swapiService = new SwapiService();

  onPersonSelected = selectedPerson => {
    this.setState({ selectedPerson });
  };

  render() {
    const itemsList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
      >
        {item => (
          <div>
            {item.name}
            <p>Year of birth: {item.birthYear}</p>
          </div>
        )}
      </ItemList>
    );

    const personDetails = <ItemDetails itemId={this.state.selectedPerson} />;

    return (
      <ErrorBoundry>
        <Row left={itemsList} right={personDetails}></Row>
      </ErrorBoundry>
    );
  }
}
