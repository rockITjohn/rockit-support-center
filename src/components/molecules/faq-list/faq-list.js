import FaqItem from "../../atoms/faq-item/faq-item";

const FaqList = ({ faqItems }) => {
  return (
    <div>
      {faqItems.length > 0 ? (
        faqItems.map((item) => (
          <div key={item.Id} className="my-2">
            <FaqItem item={item} />
          </div>
        ))
      ) : (
        <div className="my-2">
          <p className="px-5 py-5">No Questions and Answers</p>
        </div>
      )}
      {}
    </div>
  );
};

export default FaqList;
