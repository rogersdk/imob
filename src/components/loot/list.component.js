import React, {Component} from "react";
import Axios from "axios";

import constants from "../../common/constants"; 

const BASE_URL_LOOT_API = constants.baseUrl + 'loot';

export default class Loot extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loots:[{
                id:1,
                player:{"name":"Jhdallamarta","classType":""},
                from:"Molten Core: Golemagg the Incinerator",
                data:"Feb 2, 2020 11:12:08 PM",
                wowHeadItemId:16841
            }]
        }
    }

    render() {
        return (
            <div>
                <table className="table table-striped">
                    <thead>
                        <th>Id</th>
                        <th>Player</th>
                        <th>Dkp</th>
                        <th>Item</th>
                        <th>Data</th>
                    </thead>
                </table>

            </div>
        )
    }
}