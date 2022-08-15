import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentSearchTerm: "",
  loadingSearch: false,
  activeSearch: false,
  currentSearchResults: {},
  answerItems: [],
  documentItems: [],
  documentItemTypes: [],
  filteredDocumentItems: [],
  selectedFormattedDocumentType: "All",
  selectedDocumentType: ["All"],
  faqItems: [],
  totalNumberOfResults: 0,
  showFileTypeModal: false,
  showEmailModal: false,
  hasShownEmailModal: false,
};

export const searchSlice = createSlice({
  name: "searchSlice",
  initialState,
  reducers: {
    setCurrentSearchTerm: (state, action) => {
      state.currentSearchTerm = action.payload;
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
      // Store document types for filtering
      action.payload.forEach((docItem) => {
        let fileType = docItem.DocumentId.split(".").pop();
        switch (fileType) {
          case "pdf":
            state.documentItemTypes.push("PDF");
            break;

          case "pptx":
            state.documentItemTypes.push("PowerPoint");
            break;

          case "mp4":
            state.documentItemTypes.push("Video");
            break;

          case "mkv":
            state.documentItemTypes.push("Video");
            break;

          case "webm":
            state.documentItemTypes.push("Video");
            break;

          case "wav":
            state.documentItemTypes.push("Audio");
            break;

          case "xlsx":
            state.documentItemTypes.push("Excel");
            break;

          case "csv":
            state.documentItemTypes.push("CSV File");
            break;

          default:
            state.documentItemTypes.push(fileType);
        }
      });
    },
    setFaqItems: (state, action) => {
      state.faqItems = action.payload;
    },
    setSelectedDocumentType: (state, action) => {
      state.selectedFormattedDocumentType = action.payload;
      let formattedFileType = action.payload;
      switch (formattedFileType) {
        case "PDF":
          state.selectedDocumentType = ["pdf"];
          break;
        case "PowerPoint":
          state.selectedDocumentType = ["pptx"];
          break;
        case "Video":
          state.selectedDocumentType = ["mkv", "webm", "mp4"];
          break;
        case "Audio":
          state.selectedDocumentType = ["wav"];
          break;
        case "Excel":
          state.selectedDocumentType = ["xlsx"];
          break;
        case "CSV File":
          state.selectedDocumentType = ["csv"];
          break;
        default:
          state.selectedDocumentType = [formattedFileType];
      }
    },
    setFilteredDocumentItems: (state, action) => {
      if (state.selectedDocumentType.includes("All")) {
        state.filteredDocumentItems = state.documentItems;
      } else {
        state.filteredDocumentItems = state.documentItems.filter((docItem) => {
          let fileType = docItem.DocumentId.split(".").pop();
          return state.selectedDocumentType.includes(fileType);
        });
      }
    },
    setShowFileTypeModal: (state, action) => {
      state.showFileTypeModal = action.payload;
    },
    setShowEmailModal: (state, action) => {
      state.showEmailModal = action.payload;
    },
    setHasShownEmailModal: (state, action) => {
      state.hasShownEmailModal = action.payload;
    },
  },
});

export const {
  setCurrentSearchTerm,
  setLoadingSearch,
  setActiveSearch,
  setCurrentSearchResults,
  setAnswerItems,
  setDocumentItems,
  setFaqItems,
  setTotalNumberOfResults,
  setSelectedDocumentType,
  setFilteredDocumentItems,
  setShowFileTypeModal,
  setShowEmailModal,
  setHasShownEmailModal,
} = searchSlice.actions;

export default searchSlice.reducer;
