import { useState } from "react";
import { useSelector } from "react-redux";
import FaqList from "../../molecules/faq-list/faq-list";
import AnswerList from "../answer-list/answer-list";
import DocumentList from "../document-list/document-list";
import ResultButtons from "../../atoms/result-buttons/result-buttons";

const ResultList = () => {
  const {
    answerItems,
    documentItems,
    faqItems,
    documentItemTypes,
    filteredDocumentItems,
  } = useSelector((state) => state.searchReducer);

  const docItemTypes = new Set(documentItemTypes);
  console.log({ docItemTypes });

  const [showAnswers, setShowAnswers] = useState(true);
  const [showFaqs, setShowFaqs] = useState(true);
  const [showDocuments, setShowDocuments] = useState(true);
  const [boldedItem, setBoldedItem] = useState("all");

  const handleAllClick = () => {
    setShowAnswers(true);
    setShowFaqs(true);
    setShowDocuments(true);
    setBoldedItem("all");
  };

  const handleAnswersClick = () => {
    setShowAnswers(true);
    setShowDocuments(false);
    setShowFaqs(false);
    setBoldedItem("answers");
  };

  const handleFaqsClick = () => {
    setShowAnswers(false);
    setShowFaqs(true);
    setShowDocuments(false);
    setBoldedItem("faqs");
  };

  const handleDocumentsClick = () => {
    setShowAnswers(false);
    setShowFaqs(false);
    setShowDocuments(true);
    setBoldedItem("documents");
  };

  return (
    <div>
      <ResultButtons
        handleAllClick={handleAllClick}
        handleAnswersClick={handleAnswersClick}
        handleDocumentsClick={handleDocumentsClick}
        handleFaqsClick={handleFaqsClick}
        answerItems={answerItems}
        faqItems={faqItems}
        boldedItem={boldedItem}
        documentItems={filteredDocumentItems}
      />
      {answerItems.length > 0 && showAnswers ? (
        <div className="mb-5">
          <div className="border-b-2 mb-3">
            <p className="text-lg">Top Answers</p>
          </div>
          <AnswerList answerItems={answerItems} />
        </div>
      ) : (
        ""
      )}
      {faqItems.length > 0 && showFaqs ? (
        <div className="mb-5">
          <div className="border-b-2 mb-3">
            <p className="text-lg">Frequently Asked Questions</p>
          </div>
          <FaqList faqItems={faqItems} />
        </div>
      ) : (
        ""
      )}
      {documentItems.length > 0 && showDocuments ? (
        <div className="mb-5">
          <div className="border-b-2 mb-3 flex justify-between">
            <p className="text-lg">Documents</p>
            <p className="">Total found: {filteredDocumentItems.length}</p>
          </div>
          <DocumentList documentItems={filteredDocumentItems} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ResultList;
