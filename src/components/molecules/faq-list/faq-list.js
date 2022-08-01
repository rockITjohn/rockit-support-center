import FaqItem from "../../atoms/faq-item/faq-item";

const FaqList = ({ faqItems }) => {
  return (
    <div className="">
      {faqItems.map((item) => (
        <div key={item.Id} className="my-2">
          <FaqItem item={item} />
        </div>
      ))}
    </div>
  );
};

export default FaqList;
