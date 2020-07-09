import { ADD_TO_CART,REMOVE_ITEM } from '../actions/action-types/cart-actions'

const initState = {
    items: [
        {id:1,name:'Sledgehammer', price:125.75},
        {id:2,name:'Axe', price:190.50},
        {id:3,name:'Bandsaw', price:562.13},
        {id:4,name:'Chisel', price:12.90},
        {id:5,name:'Hacksaw', price:18.45}
    ],
    addedItems:[],
    total: 0
}

const cartReducer = (state = initState, action)=> {
    
    switch(action.type)
    {
        case ADD_TO_CART:
            let addedItem = state.items.find(item=> item.id === action.id)
            let existed_item= state.addedItems.find(item=> action.id === item.id)
            const updatedItems = state.addedItems.map(item =>
                item.id === action.id ? { ...item, quantity: item.quantity + 1 } : item
            );
            
            if(existed_item)
            {
                let newTotal = parseFloat(state.total) + addedItem.price;
                addedItem.quantity += 1 
                return {
                    ...state,
                    addedItems: updatedItems,
                    total: newTotal.toFixed(2)
                    }
            }
            else
            {
                addedItem.quantity = 1;
                let newTotal = parseFloat(state.total) + addedItem.price
                
                return {
                    ...state,
                    addedItems: [...state.addedItems, addedItem],
                    total : newTotal.toFixed(2)
                }
                
            }
        
        case REMOVE_ITEM:
            let itemToRemove= state.addedItems.find(item=> action.id === item.id)
            let new_items = state.addedItems.filter(item=> action.id !== item.id)
            let newTotal = parseFloat(state.total) - (itemToRemove.price * itemToRemove.quantity);
            return{
                ...state,
                addedItems: new_items,
                total: newTotal.toFixed(2)
            }
        
        default:
            return state;
    }
}

export default cartReducer;