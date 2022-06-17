import { useState } from "react";
import { useDispatch } from "react-redux";
import { ReactComponent as SearchSvg } from "../../../assets/search.svg";
import Alert from "../alert/alert";
import {
  setActiveSearch,
  setCurrentSearchTerm,
  setLoadingSearch,
  setCurrentSearchResults,
  setDocumentItems,
  setAnswerItems,
  setOtherItems,
  setTotalNumberOfResults,
  addSearchToPreviousSearches,
} from "../../../redux/slices/searchSlice";
import { getKendraResults } from "../../../api/query-kendra";
import { sortKendraResults } from "../../../helper/helper";
import { useEffect } from "react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (searchTerm.length < 1) {
      setAlert();
      return;
    }
    await submitSearch();
    // resetReduxStateBeforeQuery();
    // dispatch(setLoadingSearch(true));
    // try {
    //   await queryKendraAndSortResults(searchTerm);
    //   setLoadingAndActiveSearchAfterSearch();
    // } catch (error) {
    //   console.log("Error handling Submit", error);
    // }
  };

  const resetReduxStateBeforeQuery = () => {
    dispatch(setActiveSearch(false));
    dispatch(setCurrentSearchTerm(undefined));
    dispatch(setCurrentSearchResults(undefined));
    dispatch(setDocumentItems([]));
    dispatch(setAnswerItems([]));
    dispatch(setOtherItems([]));
    dispatch(setTotalNumberOfResults(0));
  };

  // TODO: Reject query if searchTerm is empty
  const queryKendraAndSortResults = async (searchTerm) => {
    const kendraResults = await getKendraResults(searchTerm);
    dispatch(setCurrentSearchTerm(searchTerm));
    dispatch(addSearchToPreviousSearches(searchTerm));
    dispatch(setCurrentSearchResults(kendraResults));
    sortKendraResults(kendraResults, dispatch);
  };

  const setLoadingAndActiveSearchAfterSearch = () => {
    dispatch(setLoadingSearch(false));
    dispatch(setActiveSearch(true));
  };

  const submitSearch = async (searchTerm) => {
    resetReduxStateBeforeQuery();
    dispatch(setLoadingSearch(true));
    try {
      await queryKendraAndSortResults(searchTerm);
      setLoadingAndActiveSearchAfterSearch();
    } catch (error) {
      console.log("ERror handling submit", error);
    }
  };

  // const resetForm = (e) => {
  //   setSearchTerm("");
  //   e.target.reset();
  // };

  // Get querystring search parameter
  const checkQueryStringParameter = () => {
    let queryParams = new URLSearchParams(window.location.search);
    return queryParams.get("search");
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const setAlert = () => {
    const timeId = setTimeout(() => {
      setShowAlert(false);
    }, 3000);
    setShowAlert(true);
    return () => clearTimeout(timeId);
  };

  useEffect(() => {
    let queryString = checkQueryStringParameter();
    console.log("queryString", queryString);
    if (queryString !== null) {
      setSearchTerm(queryString);
      submitSearch(queryString);
    }
  }, []);

  return (
    <div className="">
      <form className="w-full grid grid-cols-10" onSubmit={handleSubmit}>
        <div className="col-span-9">
          <input
            type="search"
            results="5"
            className="h-14 w-full   rounded-lg rounded-r-none items-start placeholder:text-sm px-4 bg-faq-gray col-span-9 focus:outline-none"
            name=""
            id=""
            placeholder="Just ask me..."
            onChange={handleChange}
          />
        </div>
        <button className="bg-primary-orange w-14 h-14 relative rounded-lg rounded-l-none col-span-1">
          <SearchSvg className="center" />
        </button>
      </form>
      {showAlert && <Alert color="red" setShowAlert={setShowAlert} />}
    </div>
  );
};
export default SearchBar;
