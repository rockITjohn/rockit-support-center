import DocumentPopover from "../document-popover/document-popover";

const ResultButtons = (props) => {
  const {
    handleAllClick,
    handleAnswersClick,
    handleDocumentsClick,
    handleFaqsClick,
    answerItems,
    faqItems,
    boldedItem,
    documentItems,
  } = props;

  return (
    <div className="flex align-middle border-b-2 gap-5 mb-4 pb-2">
      <button
        onClick={handleAllClick}
        className={`
        font-bold + ${
          boldedItem === "all"
            ? "text-black underline decoration-primary-blue underline-offset-[13px] decoration-2"
            : "text-gray-400"
        }`}
      >
        All
      </button>
      <button
        onClick={handleAnswersClick}
        className={`disabled:cursor-not-allowed  disabled:text-gray-200 font-bold + ${
          boldedItem === "answers"
            ? "text-black underline decoration-primary-blue underline-offset-[13px] decoration-2"
            : "text-gray-400"
        }`}
        disabled={answerItems.length === 0}
      >
        Answers
      </button>
      <button
        onClick={handleFaqsClick}
        className={`disabled:cursor-not-allowed disabled:text-gray-200 font-bold + ${
          boldedItem === "faqs"
            ? "text-black underline decoration-primary-blue underline-offset-[13px] decoration-2"
            : "text-gray-400"
        }`}
        disabled={faqItems.length === 0}
      >
        FAQs
      </button>
      <DocumentPopover
        handleDocumentsClick={handleDocumentsClick}
        documentItems={documentItems}
        boldedItem={boldedItem}
      />
    </div>
  );
};

export default ResultButtons;
