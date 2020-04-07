import React, { Component } from "react";

import Constants from '../../common/constants';
import InputCustom from '../common/input-custom';

export default class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value:'',
            contato:'',
            telefone:'',
            endereco:'',
            padraoConstrutivo:'',
            area:'',
            ec:'',
            quartos:'',
            link:''
        }

        this.onSubmit = this.onSubmit.bind(this);

        this.onChangeValue = this.onChangeValue.bind(this);
        this.onChangeContato = this.onChangeContato.bind(this);
        this.onChangeTelefone = this.onChangeTelefone.bind(this);
        this.onChangeEndereco = this.onChangeEndereco.bind(this);
        this.onChangePadraoConstrutivo = this.onChangePadraoConstrutivo.bind(this);
        this.onChangeArea = this.onChangeArea.bind(this);
        this.onChangeEc = this.onChangeEc.bind(this);
        this.onChangeQuartos = this.onChangeQuartos.bind(this);
        this.onChangeLink = this.onChangeLink.bind(this);
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangeValue(e) {
        this.setState({
            value: e.target.value
        });
    }

    onChangeContato(e) {
        this.setState({
            contato: e.target.value
        });
    }

    onChangeTelefone(e) {
        this.setState({
            telefone: e.target.value
        });
    }

    onChangeEndereco(e) {
        this.setState({
            endereco: e.target.value
        });
    }

    onChangePadraoConstrutivo(e) {
        this.setState({
            padraoConstrutivo: e.target.value
        });
    }

    onChangeArea(e) {
        this.setState({
            area: e.target.value
        });
    }

    onChangeEc(e) {
        this.setState({
            ec: e.target.value
        });
    }

    onChangeQuartos(e) {
        this.setState({
            quartos: e.target.value
        });
    }

    onChangeLink(e) {
        this.setState({
            link: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const newInput = {
            value:this.state.value,
            contato:this.state.contato,
            telefone:this.state.telefone,
            endereco:this.state.endereco,
            padraoConstrutivo:this.state.padraoConstrutivo,
            area:this.state.area,
            ec:this.state.ec,
            quartos:this.state.quartos,
            link:this.state.link
        }

        this.setState({
            value:'',
            contato:'',
            telefone:'',
            endereco:'',
            padraoConstrutivo:'',
            area:'',
            ec:'',
            quartos:'',
            link:''
        });
        Constants.data.push(newInput);
        console.log('Values submited: ', newInput);
    }

    // TELEFONE	ENDEREÇO	PADRÃO CONSTRUTIVO	ÁREA	EC	QUARTOS	WC'S	 PREÇO TOTAL	 PREÇO UNIT.	 STATUS


    render() {
        return (
            <div>
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Form</h1>
                </div>
                <form onSubmit={this.onSubmit} className="form-horizontal">
                    <InputCustom id="link" type="text" name="link" value={this.state.link} label="Link" onChange={this.onChangeLink} />
                    <InputCustom id="contato" type="text" name="contato" value={this.state.contato} label="Contato" onChange={this.onChangeContato} />
                    <InputCustom id="telefone" type="number" name="telefone" value={this.state.telefone} label="Telefone" onChange={this.onChangeTelefone} />
                    <InputCustom id="endereco" type="text" name="endereco" value={this.state.endereco} label="Endereco" onChange={this.onChangeEndereco} />
                    <InputCustom id="padraoConstrutivo" type="number" name="padraoConstrutivo" value={this.state.padraoConstrutivo} label="Padrao Construtivo" onChange={this.onChangePadraoConstrutivo} />
                    <InputCustom id="area" type="number" name="area" value={this.state.area} label="Area" onChange={this.onChangeArea} />
                    <InputCustom id="ec" type="number" name="ec" value={this.state.ec} label="EC" onChange={this.onChangeEc} />
                    <InputCustom id="quartos" type="number" name="quartos" value={this.state.quartos} label="Quartos" onChange={this.onChangeQuartos} />
                    <InputCustom id="value" type="number" name="value" value={this.state.value} label="Value R$" onChange={this.onChangeValue} />
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                        <button type="submit" className="btn btn-primary">Submit Values</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}