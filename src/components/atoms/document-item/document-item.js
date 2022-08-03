import { ReactComponent as LinkSvg } from "../../../assets/external-link.svg";
import VideoItem from "../video-item/video-item";

const DocumentItem = ({ documentItem }) => {
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
        <div>
          {/* TODO: Change to break-normal once we get proper titles for our documents */}
          <a
            className="font-semibold py-2  text-blue-600 hover:text-blue-800
              visited:text-purple-600 visited:hover:text-purple-800 break-all flex"
            href={url}
            target="_blank"
            rel="noreferrer"
          >
            <span className="block my-auto pr-2">
              {/* To change the color of the below svg, change within the SVG file */}
              <LinkSvg className="h-6 inline " />
            </span>
            {title}
          </a>
          <div className="mt-1 font-semibold text-blue-600">{fileType}</div>
        </div>
      )}
    </div>
  );
};

export default DocumentItem;
