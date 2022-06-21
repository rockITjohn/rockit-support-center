const DocumentItem = ({ documentItem }) => {
  const title = documentItem.DocumentTitle.Text;
  const content = documentItem.DocumentExcerpt.Text;
  const url = documentItem.DocumentURI;
  return (
    <div className="border-b-2 px-5 py-5">
      {/* TODO: Change to break-normal once we get proper titles for our documents */}
      <a
        className="font-semibold py-2  text-blue-600 hover:text-blue-800
        visited:text-purple-600 visited:hover:text-purple-800 break-all "
        href={url}
        target="_blank"
        rel="noreferrer"
      >
        {title}
      </a>
      <div className="overflow-hidden">{content}</div>
      <div></div>
    </div>
  );
};

export default DocumentItem;
