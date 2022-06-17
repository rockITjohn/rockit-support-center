import Header from "../../molecules/header/header";
import QueryBox from "../../atoms/query-box/query-box";
import ResultsPage from "../results-page/results-page";
import Spinner from "../../atoms/spinner/spinner";
import { useSelector } from "react-redux";
import InitiateChatBox from "../../atoms/initiate-chat/initiate-chat";
import ChatWidget from "../../atoms/chat-widget/chat-widget";

const HomePage = () => {
  const { activeSearch, loadingSearch } = useSelector(
    (state) => state.searchReducer
  );
  const { activeChat } = useSelector((state) => state.chatReducer);

  return (
    <div className="h-screen">
      <Header />
      <div className="relative">
        <QueryBox />
        {loadingSearch && (
          <div className="absolute right-1/2">
            <Spinner />
          </div>
        )}
        {activeSearch ? (
          <ResultsPage />
        ) : (
          <section>
            <div className="md:grid md:grid-cols-4 gap-4 container mx-auto h-screen my-8 px-4">
              <div className="md:col-span-1" />
              <div className="md:col-span-2" />
              <div className="md:col-span-1">
                <InitiateChatBox />
              </div>
            </div>
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
