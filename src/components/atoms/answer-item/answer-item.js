import { getTopAnswer } from "../../../helper/helper";

const AnswerItem = ({ answer }) => {
  const title = answer.DocumentTitle.Text;
  const url = answer.DocumentURI;
  // const excerpt = answer.DocumentExcerpt.Text;

  const excerpt = getTopAnswer(
    answer.AdditionalAttributes[0].Value.TextWithHighlightsValue
  );

  return (
    <div className="border px-5 py-5">
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="font-semibold py-2  text-blue-600 hover:text-blue-800
        visited:text-purple-600 visited:hover:text-purple-800"
      >
        {title}
      </a>
      <p>{excerpt}</p>
      <div></div>
    </div>
  );
};

export default AnswerItem;
