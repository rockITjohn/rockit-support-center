import ResultList from "../../molecules/result-list/result-list";
import { useSelector } from "react-redux";
import NoResults from "../../atoms/no-results/no-results";

const ResultPanel = () => {
  const { totalNumberOfResults } = useSelector((state) => state.searchReducer);
  return (
    <section className="">
      {totalNumberOfResults < 1 ? <NoResults /> : <ResultList />}

      {/* TODO: Find pagination headless library: react-headless-pagination */}
    </section>
  );
};

export default ResultPanel;
