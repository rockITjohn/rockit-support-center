import { useSelector } from "react-redux";
import { ReactComponent as VideoSvg } from "../../../assets/video.svg";
import Modal from "../modal/modal";
import { useDispatch } from "react-redux";
import { setShowModal } from "../../../redux/slices/searchSlice";

const VideoItem = ({ title, url, fileType }) => {
  const { showModal } = useSelector((state) => state.searchReducer);
  const dispatch = useDispatch();
  const handleVideoClick = (e) => {
    console.log("Event to handleVideoClick", e);
    e.target.pause();
    dispatch(setShowModal(true));
  };

  const posterUrl = `${url}#t=2.0`;

  return (
    <div className="">
      <div>
        <div className="flex flex-col">
          <div className="" onClick={handleVideoClick}>
            <video
              preload="metadata"
              onPlay={handleVideoClick}
              width="100"
              height="100"
              poster={posterUrl}
              alt="Video"
              className="rounded px-5 py-5 mx-auto my-auto w-10/12 lg:w-3/4 "
            >
              <source src={posterUrl} type="video/mp4" />
            </video>
          </div>
          <div className="">
            <p
              className="font-semibold py-2  text-blue-600 hover:text-blue-800
            visited:text-purple-600 visited:hover:text-purple-800 break-all cursor-pointer flex"
              onClick={handleVideoClick}
            >
              <span className="block my-auto pr-2 ">
                <VideoSvg className="h-6 inline text-blue-600" />
              </span>
              {title}
            </p>
            <div className="mt-1 font-semibold text-blue-600">{fileType}</div>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="">
          <Modal title={title} url={url} />
        </div>
      )}
    </div>
  );
};

export default VideoItem;
