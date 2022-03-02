const SearchResults = () => {
  let searchResults = [
    {
      type: "video",
      title: "Changing the oil in your generator",
      link: "https://youtube.com",
      id: 1,
    },
    {
      type: "pdf",
      title: "Best oil for generators",
      link: "https://youtube.com",
      id: 2,
    },
    {
      type: "pdf",
      title: "Generator gas and oil guide",
      link: "https://example.org",
      id: 3,
    },
  ];

  return (
    <section className="w-full md:h-full border">
      <h1 className="font-semibold text-center text-2xl py-2">
        Content We Found
      </h1>
      <div className="mx-2">
        {searchResults.map(({ type, title, link, id }) => {
          return (
            <div className="border shadow rounded-2xl py-2 my-2" key={id}>
              <div>
                <p>
                  <span className="text-red-500 px-2 uppercase inline-block">
                    {type}:
                  </span>
                  {title}
                </p>
              </div>
              <p>
                <span className="text-red-500 px-2">LINK: </span>
                <a
                  href={link}
                  className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                >
                  {link}
                </a>
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SearchResults;
