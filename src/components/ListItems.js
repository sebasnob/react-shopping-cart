import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from './actions/cartActions';

class ListItems extends Component{

    handleClick = (id)=>{
        this.props.addToCart(id);
    }

    render()
    {
        let productList = this.props.items.map( item => {
            return(
                <div className="card" key={item.id}>
                    <div className="card-image">
                        <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=>{this.handleClick(item.id)}}><i className="material-icons">add</i></span>
                    </div>

                    <div className="card-content">
                        <p>{item.name}</p>
                        <p><b>Price: ${item.price}</b></p>
                    </div>
                </div>
            )
            });

        return(
            <div className="container">
                <h3 className="center">Products</h3>
                <div className="box">
                    {productList}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {items: state.items}
}

const mapDispatchToProps= (dispatch)=>{   
    return{addToCart: (id)=>{dispatch(addToCart(id))}}
}

export default connect(mapStateToProps,mapDispatchToProps)(ListItems);
//export default ListItems;