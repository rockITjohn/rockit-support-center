import SearchBar from "../search-bar/search-bar";
import HelpPanel from "../help-panel/help-panel";

const SearchArea = () => {
  return (
    <section className="w-full lg:pb-4  my-auto">
      <div className="px-10 md:px-18 lg:px-24 xl:px-38 2xl:px-40 3xl:px-52 4xl:px-80">
        <div className="py-2 md:grid md:grid-cols-4 ">
          <div className="md:col-span-3 my-auto">
            <div className="">
              <h1 className="font-semibold tracking-wide text-2xl text-white py-1">
                Looking for help? Just ask me!
              </h1>
            </div>
            <div className="text-center">
              <SearchBar />
            </div>
          </div>
          <div className="md:col-span-1">
            <HelpPanel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchArea;
