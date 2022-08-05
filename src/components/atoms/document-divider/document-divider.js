import DocumentItem from "../document-item/document-item";
import VideoItem from "../video-item/video-item";

const DocumentDivider = ({ documentItem }) => {
  const title = documentItem.DocumentTitle.Text;
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
      {fileType === "Video" ? (
        <VideoItem title={title} url={url} fileType={fileType} />
      ) : (
        <DocumentItem url={url} title={title} fileType={fileType} />
      )}
    </div>
  );
};

export default DocumentDivider;
