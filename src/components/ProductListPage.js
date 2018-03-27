import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actFetchProductsRequest, actDeleteProductRequest } from '../actions/index';
import Nav from './Nav/nav'


class ProductListPage extends Component {

    componentDidMount() {//Được gọi sau khi component render lần đầu tiên
        this.props.fetchAllProducts();
    }

    handleClick = event => {
        var DeleteItem = {
            "number": Number(event.target.value)
        }
        this.props.deleteProduct(DeleteItem);
    }

    componentDidUpdate() {
        const { history } = this.props;
        if (this.props.status === "Success") {
            alert("Success")
            window.location.reload();
        }
    }

    render() {
        const { products } = this.props;
        return (
            <div>
                <Nav />
                <div className="container" style={{ marginTop: "10px", marginBottom: "100px" }}>
                    <div className="row">
                        {products.map(function (value) {
                            //onst dateTime = new Date(value.expirt)
                            // var date = new Date(Number(value.expirt));
                            var date = new Date(value.expiry);

                            console.log(date)
                            var setDate = date.getDay()+" / "+date.getMonth()+" / "+date.getFullYear()+" "+date.getHours()+":"+date.getMinutes()+ " น."  
                            return (
                                <div key={value.number} className="col" style={{ paddingTop: "50px" }}>
                                    <div className="card" style={{ width: "18rem", margin: "auto", display: "block" }}>
                                        <img className="card-img-top" src={value.image} alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title text-truncate">{value.title}</h5>
                                            <p className="card-text text-truncate">{value.name}</p>
                                        </div>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">สถานที่ : {value.location}</li>
                                            <li className="list-group-item">วันที่ :{setDate}</li>
                                            <li className="list-group-item">ราคา : {value.price}</li>
                                        </ul>
                                        <div className="card-body">

                                            <button value={value.number} className="btn btn-outline-danger" type="button" onClick={this.handleClick} style={{ marginRight: "40px" }}>ลบ</button>

                                            <UpdateItem value={value.number} />
                                        </div>
                                    </div>
                                </div>
                            );
                        }.bind(this))}
                    </div>
                </div>
            </div>
        );
    }
}

class UpdateItem extends React.Component {

    UpdateItem = value => {
        localStorage.setItem('id', this.props.value);
        if (localStorage.id != "") {
            window.location = '/UpdateItem'
        } else {
            alert("Error")
        }
    }

    render() {
        return (
            <button type="button" onClick={this.UpdateItem.bind(this)} className="btn btn-secondary" style={{ marginRight: "20px" }}>แก้ไข</button>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        products: state.products,
        status: state.status.Status
    }
}


const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllProducts: () => {
            dispatch(actFetchProductsRequest());
        },
        deleteProduct: (item) => {
            dispatch(actDeleteProductRequest(item))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
