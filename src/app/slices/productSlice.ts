import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  id: string;
  name: string;
  category_id: string;
  description: string;
  price_per_hour: string;
  thumbnail: string;
  owner: Owner;
  category: Category;
}

type Owner = {
  id: string;
  name: string;
  avatar: string;
};

type Category = {
  id: string;
  name: string;
};

interface ProductState {
  product: Product | null;
  relatedProducts: Product[] | null;
}

const initialState: ProductState = {
  product: null,
  relatedProducts: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct: (state, action: PayloadAction<Product>) => {
      state.product = action.payload;
    },
    setRelatedProducts: (state, action: PayloadAction<Product[]>) => {
      state.relatedProducts = action.payload;
    },
  },
});

export const { setProduct, setRelatedProducts } = productSlice.actions;
export default productSlice.reducer;
