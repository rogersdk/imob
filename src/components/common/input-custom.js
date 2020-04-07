import React, { Component } from "react";

export default class InputCustom extends Component {

    constructor(props) {
        super(props);
        
        this.state = {errorMessage:''};
    }

    render() {
        return(
            <div className="form-group">
                <div className="">
                    <label htmlFor={this.props.id} >{this.props.label}</label>
                    <input id={this.props.id} className="form-control" type={this.props.type} name={this.props.name} value={this.props.value} onChange={this.props.onChange} required/>
                    <div className="invalid-feedback d-block">{this.state.errorMessage}</div>
                </div>
            </div>
        )
    }
}