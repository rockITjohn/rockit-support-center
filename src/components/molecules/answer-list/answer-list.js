import AnswerItem from "../../atoms/answer-item/answer-item";

const AnswerList = ({ answerItems }) => {
  console.log({ answerItems });
  return (
    <div>
      {answerItems.length > 0 ? (
        answerItems.map((answer) => (
          <div key={answer.Id} className="my-2">
            <AnswerItem answer={answer} />
          </div>
        ))
      ) : (
        <div className="my-2">
          <p className="px-5 py-5">No Best Guess</p>
        </div>
      )}
    </div>
  );
};

export default AnswerList;
