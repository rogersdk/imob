import React, { Component } from "react";
import Constants from "../../common/constants";

export default class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: Constants.data,
            values: {
                min:0,
                max:0,
                average:0
            }
        }

        this.calculateValues = this.calculateValues.bind(this);
        this.calculateUnitPrice = this.calculateUnitPrice.bind(this);
    }

    calculateUnitPrice(area, value) {
        return eval(value) / eval(area);
    }

    // =SE(H12="";"";ARRED(L12/H12;2))

    calculateValues() {
        var max = this.state.data.reduce(function (prev, current) {
            return (eval(prev.value) > eval(current.value)) ? prev : current
        }, {});


        var min = this.state.data.reduce(function (prev, current) {
            return (eval(prev.value) < eval(current.value)) ? prev : current
        }, {});
        
        var sum = this.state.data.reduce(function (prev, cur) {
            return eval(prev) + eval(cur.value);
        }, 0);
        
        var calculatedAverage = sum > 0 ? (sum / this.state.data.length) : 0;

        return {min: min.value, max: max.value, average: calculatedAverage};
    }


    componentWillMount() {
        console.log(this.calculateValues());
        this.setState({data: Constants.data, values: this.calculateValues()});
    }

    render() {
        return (
            <div>
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Dashboard</h1>

                    <div className="card">
                        <div className="card-body">
                            <div className="row align-items-center">
                                <div className="col">
                                    <h6 className="text-uppercase text-muted mb-2">
                                    Average Value
                                    </h6>
                                    <span className="h2 mb-0">
                                    {
                                        this.state.values.average
                                    }
                                    </span>
                                    <span className="badge badge-soft-success mt-n1">
                                    $
                                    </span>
                                </div>
                                <div className="col-auto">
                                    <span className="h2 fe fe-dollar-sign text-muted mb-0"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <div className="row align-items-center">
                                <div className="col">
                                    <h6 className="text-uppercase text-muted mb-2">
                                    Min Value
                                    </h6>
                                    <span className="h2 mb-0">
                                    {
                                        this.state.values.min
                                    }
                                    </span>
                                    <span className="badge badge-soft-success mt-n1">
                                    $
                                    </span>
                                </div>
                                <div className="col-auto">
                                    <span className="h2 fe fe-dollar-sign text-muted mb-0"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <div className="row align-items-center">
                                <div className="col">
                                    <h6 className="text-uppercase text-muted mb-2">
                                    Max Value
                                    </h6>
                                    <span className="h2 mb-0">
                                    {
                                        this.state.values.max
                                    }
                                    </span>
                                    <span className="badge badge-soft-success mt-n1">
                                    $
                                    </span>
                                </div>
                                <div className="col-auto">
                                    <span className="h2 fe fe-dollar-sign text-muted mb-0"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <h2>Data List</h2>
                <div className="table-responsive">
                    <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                        <th>Indice</th>
                        <th>Link</th>
                        <th>Contato</th>
                        <th>Telefone</th>
                        <th>Endereco</th>
                        <th>PadraoConstrutivo</th>
                        <th>Area</th>
                        <th>EC</th>
                        <th>Quartos</th>
                        <th>Preco Total</th>
                        <th>Preco Unit.</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.data.map((d,i) => {
                                return (
                                    <tr key={i}>
                                        <td>{++i}</td>
                                        <td><a href={d.link} target="_blank">{d.link}</a></td>
                                        <td>{d.contato}</td>
                                        <td>{d.telefone}</td>
                                        <td>{d.endereco}</td>
                                        <td>{d.padraoConstrutivo}</td>
                                        <td>{d.area}</td>
                                        <td>{d.ec}</td>
                                        <td>{d.quartos}</td>
                                        <td>{d.value}</td>
                                        <td>{ this.calculateUnitPrice(d.area, d.value) }</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
