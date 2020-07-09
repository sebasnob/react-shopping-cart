import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeItem} from './actions/cartActions';

class Cart extends Component{

    handleRemove = (id)=>{
        this.props.removeItem(id);
    }

    render(){
        let addedItems = '';
        if(this.props.items.length)
        {
            addedItems = (  
                this.props.items.map(item=>{
                    return(
                        <div>
                            <li className="collection-item avatar" key={item.id}>
                                <div className="item-desc">
                                    <p>{item.name}</p>
                                    <p><b>Price: ${item.price}</b></p> 
                                    <p>
                                        <b>Quantity: {item.quantity}</b> 
                                    </p>
                                    <button className="waves-effect waves-light btn pink remove" onClick={()=>{this.handleRemove(item.id)}}>Remove</button>
                                </div>
                            </li>
                        </div>
                    )
                })
            )
        }
        else
        {
            addedItems= (<p>Empty</p>)
        }

        return(
            <div className="container">
                <div className="cart">
                    <h4>You order:</h4>
                    <ul className="collection">
                        {addedItems}
                    </ul>
                    <div className="container">
                        <div className="collection">
                            <li className="collection-item"><b>Total: ${this.props.total}</b></li>
                        </div>
                        <div className="checkout">
                            <button className="waves-effect waves-light btn">Checkout</button>
                        </div>
                    </div>
                </div>  
            </div>
       )
    }
}

const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
        total: state.total
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)