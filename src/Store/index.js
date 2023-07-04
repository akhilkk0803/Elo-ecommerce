import { configureStore, createSlice } from "@reduxjs/toolkit";
const product = createSlice({
  name: "products",
  initialState: {
    Allproducts: [],
    filterProducts: [],
    categoryData: [],
    companyData: [],
    colorsData: [],
    priceData: [],
    maxPrice: 0,
  },
  reducers: {
    addAllProducts(state, action) {
      state.Allproducts = action.payload;
      console.log(action.payload);

      console.log(state.categoryData);
    },
    reset(state) {
      state.filterProducts = state.Allproducts;
    },
    getUniquedata(state, action) {
      const cat = state.Allproducts.map((el) => el[`${action.payload}`]);
      console.log(cat);
      if (action.payload == "category") {
        state.categoryData = [...new Set(cat)];
        return;
      } else if (action.payload == "company") {
        state.companyData = [...new Set(cat)];
      } else if (action.payload == "colors") {
        state.colorsData = [...new Set(cat.flat())];
      } else if (action.payload == "price") {
        state.priceData = [...new Set(cat)];
        let maxprice = state.priceData.reduce((acc, el) => {
          return Math.max(acc, el);
        });
        state.maxPrice = maxprice;
      }
    },
    sort(state, action) {
      state.filterProducts = [...state.Allproducts];
      switch (action.payload.type) {
        case "highest":
          state.filterProducts.sort((a, b) => b.price - a.price);
          break;
        case "lowest":
          state.filterProducts.sort((a, b) => a.price - b.price);
          break;
        case "aToz":
          state.filterProducts.sort((a, b) =>
            a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1
          );
          break;
        case "zToa":
          state.filterProducts.sort((a, b) =>
            b.name.toUpperCase() > a.name.toUpperCase() ? 1 : -1
          );

          break;
        default:
          state.filterProducts = state.Allproducts;
      }
    },
    filterbyvalue(state, action) {
      state.filterProducts = [...state.Allproducts];
      console.log(state.Allproducts);
      const value = action.payload.toLowerCase();
      const newproducts = state.filterProducts.filter((el) =>
        el.name.toLowerCase().includes(value)
      );
      state.filterProducts = newproducts;
    },
    filterPro(state, action) {
      const type = action.payload.type;
      const cat = action.payload.value;
      if (cat == "All") {
        state.filterProducts = state.Allproducts;
        return;
      }
      if (type == "Cat") {
        state.filterProducts = state.Allproducts.filter(
          (el) => el.category == cat
        );
        return;
      } else if (type == "Comp") {
        state.filterProducts = state.Allproducts.filter(
          (el) => el.company == cat
        );
      } else if (type == "Color") {
        state.filterProducts = state.Allproducts.filter((el) =>
          el.colors.includes(cat)
        );
      } else {
        console.log(cat);
        state.filterProducts = state.Allproducts.filter(
          (el) => el.price <= cat
        );
      }
    },
  },
});

//---------------------------------------------------------------//

const cart = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    totalItem: 0,
    totalAmount: 0,
    shippingFee: 500,
    orderTotal: 0,
  },
  reducers: {
    setcartitem(state, action) {
      console.log(action.payload);
      if (action.payload == []) return;
      const data = action.payload;
      state.cart = JSON.parse(data);
    },
    addtocart(state, action) {
      const currid = action.payload.id;
      const index = state.cart.findIndex((el) => el.id === currid);
      const item = action.payload;
      if (index == -1) {
        state.cart.push(item);
        state.totalItem += item.amount;
        state.totalAmount += item.price * item.amount;
        return;
      } else {
        const curritem = state.cart[index];
        curritem.amount += item.amount;
        state.totalItem += item.amount;
        state.totalAmount += item.price * item.amount;
      }
      state.orderTotal+=(state.totalAmount+state.shippingFee)
    },
    removefromcart(state, action) {
      const id = action.payload;
      const index = state.cart.findIndex((el) => el.id === id);
      const item = state.cart[index];
      if (item.amount == 1) {
        state.totalItem -= 1;
        state.cart.splice(index, 1);
        return;
      } else {
        state.totalAmount -= item.price;
        state.totalItem -= 1;
        item.amount = item.amount - 1;

        return;
      }
    },
    remove(state, action) {
      const index = state.cart.findIndex((el) => el.id == action.payload);
      state.cart.splice(index, 1);
    },
    reset(state) {
      state.cart = [];
      state.totalAmount = 0;
      state.totalItem = 0;
    },
  },
});

export const productactions = product.actions;
export const cartactions = cart.actions;
const store = configureStore({
  reducer: { products: product.reducer, cart: cart.reducer },
});

export default store;
