import { useSelector } from "react-redux";
import { ReactComponent as VideoSvg } from "../../../assets/video.svg";
import Modal from "../modal/modal";
import { useDispatch } from "react-redux";
import { setShowModal } from "../../../redux/slices/searchSlice";

const VideoItem = ({ title, url, fileType }) => {
  const { showModal } = useSelector((state) => state.searchReducer);
  const dispatch = useDispatch();
  const handleVideoClick = () => {
    dispatch(setShowModal(true));
  };

  return (
    <div className="">
      <div>
        <p
          className="font-semibold py-2  text-blue-600 hover:text-blue-800
        visited:text-purple-600 visited:hover:text-purple-800 break-all cursor-pointer "
          onClick={handleVideoClick}
          // href={url}
          // target="_blank"
          // rel="noreferrer"
        >
          {title}
          <span className="inline ">
            <VideoSvg className="h-5 inline text-black" />
          </span>
        </p>
        <div className="mt-1">File Type: {fileType}</div>
      </div>
      {/* TODO: Change to break-normal once we get proper titles for our documents */}
      {showModal && (
        <div className="">
          <Modal title={title} url={url} />
        </div>
      )}
    </div>
  );
};

export default VideoItem;
