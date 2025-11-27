import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UIState {
  isLoading: boolean;
  error: string | null;
  selectedTokenId: string | null;
  isModalOpen: boolean;
  hoveredTokenId: string | null;
}

const initialState: UIState = {
  isLoading: false,
  error: null,
  selectedTokenId: null,
  isModalOpen: false,
  hoveredTokenId: null,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setSelectedTokenId: (state, action: PayloadAction<string | null>) => {
      state.selectedTokenId = action.payload;
    },
    setModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isModalOpen = action.payload;
    },
    setHoveredTokenId: (state, action: PayloadAction<string | null>) => {
      state.hoveredTokenId = action.payload;
    },
  },
});

export const {
  setLoading,
  setError,
  setSelectedTokenId,
  setModalOpen,
  setHoveredTokenId,
} = uiSlice.actions;

export default uiSlice.reducer;

