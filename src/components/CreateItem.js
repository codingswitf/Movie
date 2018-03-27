import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { actCreateProductRequest } from '../actions/index';
import Nav from './Nav/nav'

const initialState = {
    image: "",
    title: "",
    detail: "",
    price: 0,
    location: ""
}
class CreateItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = initialState
    }

    componentDidUpdate() {
        if (this.props.status === "Success") {
            alert("Success")
            window.location.reload();
        }
    }

    onTodoClick = value => {
        var setItem = { image: this.state.image, title: this.state.title, name: this.state.detail, price: this.state.price, location: this.state.location }
        this.props.actAddProduct(setItem);
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
        const { history } = this.props;
        window.location = "/";
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
                                <input type="text" className="form-control" onChange={this.OnchangeImage.bind(this)} id="Image" placeholder="Image" />
                            </div>

                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="title">Title</label>
                                <input type="text" className="form-control" onChange={this.OnchangeTitle.bind(this)} id="title" placeholder="title" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="detial">Detial</label>
                                <input type="text" className="form-control" onChange={this.OnchangeDetail.bind(this)} id="detial" placeholder="detial" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="price">Price</label>
                                <input type="number" className="form-control" onChange={this.OnchangePrice.bind(this)} id="price" placeholder="price" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="location">Locaion</label>
                                <input type="text" className="form-control" id="location" onChange={this.OnchangeLocation.bind(this)} placeholder="location" />
                            </div>
                        </div>


                    </form>
                    <div className="container" style={{ marginTop: "60px" }}>
                        <div className="row">
                            <div className="col-sm">
                                <button type="button" className="btn btn-outline-secondary" onClick={this.onTodoBack.bind(this)} style={{ margin: "auto", display: "block" }}> กลับ </button>
                            </div>
                            <div className="col-sm">
                            </div>
                            <div className="col-sm">
                                <button type="button" className="btn btn-success" onClick={this.onTodoClick.bind(this)} style={{ margin: "auto", display: "block" }}> ยืนยัน </button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        itemEditting: state.itemEditting,
        status: state.status.Status
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        actAddProduct: (item) => {
            dispatch(actCreateProductRequest(item))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateItem);
