import SearchBar from "../search-bar/search-bar";

const QueryBox = () => {
  return (
    <section className="w-full h-1/4  bg-[linear-gradient(45deg,#F19D39_0.0%,#0051A0_100.0%)] py-2">
      <div className="px-10 md:px-40 lg:px-50">
        <div className="py-20">
          <div className="py-4">
            <h1 className="font-semibold tracking-wide text-2xl text-white">
              Looking for help? Just ask me!
            </h1>
          </div>
          <div>
            <SearchBar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default QueryBox;
