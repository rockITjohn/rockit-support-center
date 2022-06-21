import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentSearchTerm: "",
  previousSearches: [],
  loadingSearch: false,
  activeSearch: false,
  currentSearchResults: {},
  answerItems: [],
  documentItems: [],
  documentItemTypes: [],
  filteredDocumentItems: [],
  selectedDocumentType: "",
  faqItems: [],
  otherItems: [],
  totalNumberOfResults: 0,
};

export const searchSlice = createSlice({
  name: "searchSlice",
  initialState,
  reducers: {
    setCurrentSearchTerm: (state, action) => {
      state.currentSearchTerm = action.payload;
      // state.previousSearches.push(action.payload);
    },
    addSearchToPreviousSearches: (state, action) => {
      state.previousSearches.push(action.payload);
    },
    setLoadingSearch: (state, action) => {
      state.loadingSearch = action.payload;
    },
    setActiveSearch: (state, action) => {
      state.activeSearch = action.payload;
    },
    setCurrentSearchResults: (state, action) => {
      state.currentSearchResults = action.payload;
    },
    setTotalNumberOfResults: (state, action) => {
      state.totalNumberOfResults = action.payload;
    },
    setAnswerItems: (state, action) => {
      state.answerItems = action.payload;
    },
    setDocumentItems: (state, action) => {
      state.documentItems = action.payload;
      state.filteredDocumentItems = action.payload;
      action.payload.forEach((docItem) => {
        let fileType = docItem.DocumentId.split(".").pop();
        state.documentItemTypes.push(fileType);
      });
    },
    setFaqItems: (state, action) => {
      state.faqItems = action.payload;
    },
    setOtherItems: (state, action) => {
      state.otherItems = action.payload;
    },
    setSelectedDocumentType: (state, action) => {
      state.selectedDocumentType = action.payload;
    },
    setFilteredDocumentItems: (state, action) => {
      if (action.payload === "all") {
        state.filteredDocumentItems = state.documentItems;
      } else {
        state.filteredDocumentItems = state.documentItems.filter((docItem) => {
          return docItem.DocumentId.includes(action.payload);
        });
      }
    },
  },
});

export const {
  setCurrentSearchTerm,
  addSearchToPreviousSearches,
  setLoadingSearch,
  setActiveSearch,
  setCurrentSearchResults,
  setAnswerItems,
  setDocumentItems,
  setOtherItems,
  setFaqItems,
  setTotalNumberOfResults,
  setSelectedDocumentType,
  setFilteredDocumentItems,
} = searchSlice.actions;

export default searchSlice.reducer;
