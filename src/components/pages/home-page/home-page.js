import Header from "../../molecules/header/header";
import SearchArea from "../../atoms/search-area/search-area";
import ResultsPage from "../results-page/results-page";
import Spinner from "../../atoms/spinner/spinner";
import GetEmailModal from "../../atoms/get-email-modal/get-email-modal";
import { useSelector } from "react-redux";
import ChatWidget from "../../atoms/chat-widget/chat-widget";
import SendEmailModal from "../../atoms/send-email-modal/send-email-modal";

const HomePage = () => {
  const { activeSearch, loadingSearch } = useSelector(
    (state) => state.searchReducer
  );
  const { activeChat } = useSelector((state) => state.chatReducer);

  const { showGetEmailModal, showSendEmailModal } = useSelector(
    (state) => state.appReducer
  );

  return (
    <div className="h-screen">
      <div className="gradient">
        <Header />
        <SearchArea />
      </div>
      {showGetEmailModal && <GetEmailModal />}
      {showSendEmailModal && <SendEmailModal />}
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
