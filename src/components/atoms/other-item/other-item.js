const OtherItem = ({ item }) => {
  const title = item.DocumentTitle.Text;
  const content = item.DocumentExcerpt.Text;
  const url = item.DocumentURI;
  return (
    <div className="border px-5 py-5">
      <p className="font-semibold py-2">{title}</p>
      <div className="">{content}</div>
      <div>
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="underline text-blue-400"
        >
          See Document
        </a>
      </div>
    </div>
  );
};

export default OtherItem;
