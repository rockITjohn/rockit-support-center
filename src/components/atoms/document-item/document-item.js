import { ReactComponent as LinkSvg } from "../../../assets/external-link.svg";

const DocumentItem = ({ documentItem }) => {
  const title = documentItem.DocumentTitle.Text;
  const content = documentItem.DocumentExcerpt.Text;
  const url = documentItem.DocumentURI;
  const fileTypeExtention = documentItem.DocumentURI.split(".").pop();

  const fileType = (() => {
    switch (fileTypeExtention) {
      case "pdf":
        return "PDF";

      case "pptx":
        return "PowerPoint";

      case "mp4":
        return "Video";

      case "mkv":
        return "Video";

      case "webm":
        return "Video";

      case "wav":
        return "Audio";

      case "xlsx":
        return "Excel";

      case "csv":
        return "CSV File";
      default:
        return fileType;
    }
  })();
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
        <span className="inline ">
          <LinkSvg className="h-5 inline" />
        </span>
      </a>
      {/* <p className="overflow-hidden line-clamp-2 my-1">{content}</p> */}
      {/* TODO: Add document type */}
      <div className="mt-1">File Type: {fileType}</div>
    </div>
  );
};

export default DocumentItem;
