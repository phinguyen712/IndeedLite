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

export var cartReducer = (state = "", action) => {
  switch (action.type) {
    case 'UPDATE_CART':
      return action.cart
    default:
      return state;
  };
};
