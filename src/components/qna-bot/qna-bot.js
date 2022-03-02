const QnABot = () => {
  let qnb_bot_answers = [
    {
      question: "Can I use synthetic oil in my Honda equipment?",
      answer:
        "Honda engines are developed, tested and certified with petroleum based motor oils as a lubricant. Any motor oil used in our engines must meet or exceed all oil requirements as stated in the owners manual to include the recommended oil change intervals.",
      id: 1,
    },
    {
      question: "How much oil do I use?",
      answer:
        "Multiply quarts by 32. Example: 1.5 quarts would be 1.5 x 32 = 48 ounces",
      id: 2,
    },
    {
      question: "What kind of fuel should I use?",
      answer:
        "Gasoline is allowed, by regulation, to contain a variety of additives. The same regulation limits how much of some additives, such as alcohol, can be included in the fuel and still allow it to be sold as gasoline. A maximum of 10% ethanol is allowed in gasoline (other oxygenates are also listed). Honda engines are designed for good performance and efficient operation using gasoline containing from 0 to 10% ethanol.",
      id: 3,
    },
  ];

  return (
    <section className="w-full h-full border">
      <h1 className=" text-center text-2xl py-2">Quick Answers</h1>
      <div className="grid mx-2">
        {qnb_bot_answers.map(({ question, answer, id }) => {
          return (
            <div
              className="my-2 py-3 bg-gray-200 border rounded-3xl shadow inline-block"
              key={id}
            >
              <p className="px-2">
                <span className="text-red-500 mr-2 font-bold">{question}</span>
                {answer}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default QnABot;
