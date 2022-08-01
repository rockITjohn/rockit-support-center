import DocumentItem from "../../atoms/document-item/document-item";

const DocumentList = ({ documentItems }) => {
  console.log("Document Items in DocumentList", documentItems);
  return (
    <div>
      {documentItems.length > 0 ? (
        documentItems.map((documentItem) => (
          <div key={documentItem.Id} className="my-2">
            <DocumentItem documentItem={documentItem} />
          </div>
        ))
      ) : (
        <div className="my-2">
          <p className="px-5 py-5">No Documents</p>
        </div>
      )}
    </div>
  );
};

export default DocumentList;
