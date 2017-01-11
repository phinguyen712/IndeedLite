var store = require('configureStore');
//Reducers update state
export var productsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      //create copy of products so we don't mutate state
      var products = action.products.slice()
      const order = action.order;

      if(action.sortBy){
          var sortBy = action.sortBy;

          //sort products by order reducer (ascending/descending)
          products = products.sort((a,b)=>{
                        a = a[sortBy];

                        b = b[sortBy];

                        //variable for determining if order is descending/ascending
                        var orderIndex = (order === "descending") ? 1:-1;

                        if(a>b){
                          return orderIndex;
                        }else if(a===b){
                          return 0;
                        }else{
                          return -1*(orderIndex);
                        }
          })
      }
      return products;
    default:
      return state;
  };
};


export var orderReducer = (state = "descending", action) => {
  switch (action.type) {
    case 'CHANGE_ORDER':
      return action.order;
    default:
      return state;
  };
};


export var sortByReducer = (state = "", action) => {
  switch (action.type) {
    case 'SORT_BY':
      return action.string;
    default:
      return state;
  };
};


export var disCountReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_DISCOUNT':
      return !state;
    default:
      return state;
  };
};


export var cartReducer = (state = [], action) => {
  switch (action.type) {

    case 'ADD_TO_CART':
      //adds id to cart If Id already exist, increase qty key in the cart.
      //stops mutation to state
      state = state.slice();
      //return current state with only array
      var stateId= state.map((stateId)=>{return stateId.id})
      //sees if item id already exist in cart
      var cartArrIndex = stateId.indexOf(action.item);
      //if yes, increase qty
      if(cartArrIndex != -1){
        state[cartArrIndex].qty += 1;
        return state;
      //if no add new id to cart
      }else{
        return [...state,{id:action.item,qty:1}]
      }

    case 'REMOVE_FROM_CART':

      state = state.slice();
      //create new array with only id
      var idOnly = state.map((state)=>{
        return state.id;
      })
      //find index location that matches item id
      var index = idOnly.indexOf(action.item);
      // -1 qty if larger than 1, else remove item from array
      if(state[index].qty === 1){
        state.splice(index,1)
      }else{
        state[index].qty -= 1
      }
      return state

    default:
      return state;
  };
};
