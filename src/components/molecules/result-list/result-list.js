import { useSelector } from "react-redux";
import FaqList from "../../molecules/faq-list/faq-list";
import AnswerList from "../answer-list/answer-list";
import DocumentList from "../document-list/document-list";
import DocumentPopover from "../../atoms/document-popover/document-popover";

const ResultList = () => {
  const { answerItems, documentItems, faqItems, filteredDocumentItems } =
    useSelector((state) => state.searchReducer);

  return (
    <div>
      <div className="md:grid md:grid-cols-3 md:gap-3 px-2 py-2">
        <div className="md:col-span-1">
          <div className="mb-5 px-2 py-2">
            <div className="border-b-2 mb-3 flex justify-between">
              <p className="text-lg">Top Answer</p>
            </div>
            <AnswerList answerItems={answerItems} />
          </div>
        </div>
        <div className="md:col-span-1">
          <div className="mb-5 bg-gray-200 px-2 py-2">
            <div className="border-b-2 border-gray-300 mb-3 flex justify-between">
              <p className="text-lg">Frequently Asked Questions</p>
              <p className="">Total found: {faqItems.length}</p>
            </div>
            <FaqList faqItems={faqItems} />
          </div>
        </div>
        <div className="md:col-span-1">
          <div className="mb-5 px-2 py-2">
            <div className="border-b-2 mb-3 flex justify-between">
              <p className="text-lg">Documents</p>
              <DocumentPopover documentItems={documentItems} />
              <p className="">Total found: {filteredDocumentItems.length}</p>
            </div>
            <DocumentList documentItems={filteredDocumentItems} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultList;
