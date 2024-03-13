import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {
    items: [],
}

export const addToBasket = createAsyncThunk(
    'basket/addToBasket',
    async (payload) => {
        // Add your async logic here
        return payload;
    }
);

export const removeFromBasket = createAsyncThunk(
    'basket/removeFromBasket',
    async (payload) => {
        // Add your async logic here
        return payload;
    }
);

export const basketSlice = createSlice({
    name: 'basket',
    initialState,

    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(addToBasket.fulfilled, (state, action) => {
                state.items = [...state.items, action.payload];
            })
            .addCase(removeFromBasket.fulfilled, (state, action) => {
                const index = state.items.findIndex((item) => item.id === action.payload.id);
                let newBasket = [...state.items];
                if (index >= 0) {
                    newBasket.splice(index, 1);
                } else {
                    console.warn(`cant remove product (id: ${action.payload.id}) as it is not in basket!`);
                }
                state.items = newBasket;
            });
    },
});

export const selectBasketItems = (state) => state.basket.items;

export const selectBasketItemsWithId = (state, id) =>
    state.basket.items.filter((item) => item.id === id);

export const selectBasketTotal = (state) =>
    state.basket.items.reduce((total, item) => {
        return total + item.price;
    }, 0);

export default basketSlice.reducer;
