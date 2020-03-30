import React, { Component } from "react";
import Spinner from "../spinner";

const withData = (View, getData) => {
    return class extends Component {

        state = {
            itemsList: null
        };

        componentDidMount() {

            getData().then(itemsList => {
                this.setState({
                    itemsList
                });
            });
        }

        render() {
            const { itemsList } = this.state;
            console.log(this.props);

            if (!itemsList) {
                return <Spinner />
            }

            return <View data={itemsList} {...this.props} />
        }
    };
};

export default withData;