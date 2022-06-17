import AnswerItem from "../../atoms/answer-item/answer-item";

const AnswerList = ({ answerItems }) => {
  return (
    <div>
      {answerItems.map((answer) => (
        <div key={answer.Id} className="my-2">
          <AnswerItem answer={answer} />
        </div>
      ))}
    </div>
  );
};

export default AnswerList;
