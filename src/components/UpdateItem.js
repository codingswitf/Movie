import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import axios from "axios";
import { actGetProductRequest, actUpdateProductRequest } from '../actions/index';
import Nav from './Nav/nav'

class UpdateItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            image: "",
            title: "",
            detail: "",
            price: 0,
            location: "",
            number: 0,
            expiry: 0,
            id: Number(localStorage.id)
        }
    }


    componentDidMount() {
        this.props.onEditProduct(this.state.id);
    }

    componentDidUpdate() {
        const { history } = this.props;
        if (this.props.status === "Success") {
            alert("Success")
            history.goBack();
        }
    }

    onTodoClick = value => {
        const { history } = this.props;
        var setItem = { image: this.state.image, title: this.state.title, name: this.state.detail, price: this.state.price, location: this.state.location, number: this.state.number, expiry: this.state.expiry }
        this.props.updateProduct(setItem);
    }


    OnchangeTitle = value => {
        this.setState({
            title: value.target.value
        })
    }

    OnchangeDetail = value => {
        this.setState({
            detail: value.target.value
        })
    }

    OnchangePrice = value => {
        this.setState({
            price: value.target.value
        })
    }

    OnchangeLocation = value => {
        this.setState({
            location: value.target.value
        })
    }

    OnchangeImage = value => {
        this.setState({
            image: value.target.value
        })
    }

    onTodoBack = () => {
        window.location = '/';
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.editProduct) {
            this.setState({
                image: nextProps.editProduct.image,
                title: nextProps.editProduct.title,
                detail: nextProps.editProduct.name,
                price: nextProps.editProduct.price,
                location: nextProps.editProduct.location,
                number: nextProps.editProduct.number,
                expiry: nextProps.editProduct.expiry,
            })
        }
    }

    render() {
        return (
            <div>
                <Nav />
                <div className="container" style={{ marginTop: "80px" }}>
                    <form>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="Image">Image-link</label>
                                <input type="text" className="form-control" onChange={this.OnchangeImage.bind(this)} value={this.state.image} id="Image" placeholder="Image" />
                            </div>

                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="title">Title</label>
                                <input type="text" className="form-control" onChange={this.OnchangeTitle.bind(this)} value={this.state.title} id="title" placeholder="title" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="detial">Detial</label>
                                <input type="text" className="form-control" onChange={this.OnchangeDetail.bind(this)} value={this.state.detail} id="detial" placeholder="detial" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="price">Price</label>
                                <input type="number" className="form-control" onChange={this.OnchangePrice.bind(this)} value={this.state.price} id="price" placeholder="price" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="location">Locaion</label>
                                <input type="text" className="form-control" id="location" onChange={this.OnchangeLocation.bind(this)} value={this.state.location} placeholder="location" />
                            </div>
                        </div>


                    </form>
                    <div className="row">
                        <div className="col">
                            <button type="button" className="btn btn-outline-secondary" onClick={this.onTodoBack.bind(this)} > กลับ </button>
                        </div>
                        <div className="col">
                            <button type="button" className="btn btn-success" onClick={this.onTodoClick.bind(this)} > ยืนยัน </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        editProduct: state.editProduct.Item,
        status: state.status.Status
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onEditProduct: (id) => {
            dispatch(actGetProductRequest(id));
        },
        updateProduct: (item) => {
            dispatch(actUpdateProductRequest(item))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateItem);
