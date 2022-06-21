import SearchBar from "../search-bar/search-bar";
import InitiateChatBox from "../initiate-chat/initiate-chat";

const QueryBox = () => {
  return (
    <section className="w-full h-1/4 py-2">
      <div className="px-10 md:px-40 lg:px-50">
        <div className="py-4">
          <div className="py-4">
            <h1 className="font-semibold tracking-wide text-2xl text-white">
              Looking for help? Just ask me!
            </h1>
          </div>
          <div>
            <SearchBar />
          </div>
          <div className="text-center md:text-left">
            <InitiateChatBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default QueryBox;
