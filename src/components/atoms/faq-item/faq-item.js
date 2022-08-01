import { useState } from "react";
const FaqItem = ({ item }) => {
  const [showMore, setShowMore] = useState(false);

  const question =
    item.AdditionalAttributes[0].Value.TextWithHighlightsValue.Text;
  const answer =
    item.AdditionalAttributes[1].Value.TextWithHighlightsValue.Text;
  const url = item.DocumentURI;

  return (
    <div className="border-b-2 border-gray-300 px-5 py-5">
      <p className="font-semibold py-2 ">{question}</p>
      {showMore ? (
        <p className="pb-2">{answer}</p>
      ) : (
        <p className="line-clamp-3">{answer}</p>
      )}
      {url !== "" && (
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="font-semibold py-2  text-blue-600 hover:text-blue-800
          visited:text-purple-600 visited:hover:text-purple-800"
        >
          See external reference here
        </a>
      )}
      <div className="my-1">
        {showMore ? (
          <button className="text-blue-600" onClick={() => setShowMore(false)}>
            Show Less
          </button>
        ) : (
          <button className="text-blue-600" onClick={() => setShowMore(true)}>
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default FaqItem;
