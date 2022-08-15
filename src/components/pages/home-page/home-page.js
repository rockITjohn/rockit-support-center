import Header from "../../molecules/header/header";
import QueryBox from "../../atoms/query-box/query-box";
import ResultsPage from "../results-page/results-page";
import Spinner from "../../atoms/spinner/spinner";
import EmailModal from "../../atoms/email-modal/email-modal";
import { useSelector } from "react-redux";
import ChatWidget from "../../atoms/chat-widget/chat-widget";

const HomePage = () => {
  const { activeSearch, loadingSearch } = useSelector(
    (state) => state.searchReducer
  );
  const { activeChat } = useSelector((state) => state.chatReducer);

  const { showEmailModal } = useSelector((state) => state.searchReducer);

  return (
    <div className="h-screen">
      <div className="gradient">
        <Header />
        <QueryBox />
      </div>
      {showEmailModal && <EmailModal />}
      <div className="relative">
        {loadingSearch && (
          <div className="absolute right-1/2">
            {/* TODO: Fix why spinner is offset */}
            <Spinner />
          </div>
        )}
        {activeSearch ? (
          <ResultsPage />
        ) : (
          <section>
            {activeChat ? (
              <div className="fixed bottom-10 right-10 ">
                <ChatWidget />
              </div>
            ) : (
              ""
            )}
          </section>
        )}
      </div>
    </div>
  );
};

export default HomePage;
