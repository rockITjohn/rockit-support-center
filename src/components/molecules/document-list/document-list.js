import DocumentItem from "../../atoms/document-item/document-item";

const DocumentList = ({ documentItems }) => {
  return (
    <div>
      {documentItems.map((documentItem) => (
        <div key={documentItem.Id} className="my-2">
          <DocumentItem documentItem={documentItem} />
        </div>
      ))}
    </div>
  );
};

export default DocumentList;
