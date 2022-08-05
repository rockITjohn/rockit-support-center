import { ReactComponent as LinkSvg } from "../../../assets/external-link.svg";
const DocumentItem = ({ url, title, fileType }) => {
  return (
    <div className="flex">
      <div className=" my-auto text-center w-8 cursor-pointer">
        {/* Control color of this SVG in the SVG file */}
        <LinkSvg className="h-6 " />
      </div>
      <div>
        <a
          className="font-semibold py-2  text-blue-600 hover:text-blue-800
          visited:text-purple-600 visited:hover:text-purple-800 break-normal"
          href={url}
          target="_blank"
          rel="noreferrer"
        >
          <div className="px-2">{title}</div>
        </a>
        <div className="mt-1 font-semibold text-blue-600 px-2">{fileType}</div>
      </div>
    </div>
  );
};

export default DocumentItem;
