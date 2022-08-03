import SearchBar from "../search-bar/search-bar";
import InitiateChatBox from "../initiate-chat/initiate-chat";

const QueryBox = () => {
  return (
    <section className="w-full pb-4">
      <div className="px-10 md:px-18 lg:px-32">
        <div className="py-2 md:grid md:grid-cols-4">
          <div className="md:col-span-3">
            <div className="">
              <h1 className="font-semibold tracking-wide text-2xl text-white">
                Looking for help? Just ask me!
              </h1>
            </div>
            <div className="text-center">
              <SearchBar />
            </div>
          </div>
          <div className=" md:col-span-1">
            <InitiateChatBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default QueryBox;
