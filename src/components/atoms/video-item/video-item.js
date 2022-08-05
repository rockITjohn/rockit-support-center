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
    <div>
      <div>
        <div className="flex flex-col lg:flex-row">
          {/* Video Thumbnail */}
          <div
            onClick={handleVideoClick}
            className="w-full lg:w-1/2 lg:order-2 "
          >
            <video
              className="rounded px-5  mx-auto my-auto w-1/2 lg:w-full cursor-pointer"
              preload="metadata"
              onPlay={handleVideoClick}
              poster={posterUrl}
              alt="Video"
              // className="rounded px-5  mx-auto my-auto w-1/2 lg:w-1/3"
            >
              <source src={posterUrl} type="video/mp4" />
            </video>
          </div>
          {/* Text */}
          <div className="lg:order-1" onClick={handleVideoClick}>
            {/* SVG */}
            <div className="flex">
              <div className="col-span-1 flex ">
                <div className="my-auto mx-auto text-center w-8 cursor-pointer">
                  <VideoSvg className=" text-blue-600" />
                </div>
              </div>
              {/* Title and File Type */}
              <div className="col-span-5">
                <p
                  className="font-semibold py-2  text-blue-600 hover:text-blue-800
                visited:text-purple-600 visited:hover:text-purple-800 break-normal cursor-pointer"
                >
                  <div className="px-2">{title}</div>
                </p>
                <div className="mt-1 font-semibold text-blue-600 px-2">
                  {fileType}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <div>
          <Modal title={title} url={url} />
        </div>
      )}
    </div>
  );
};

export default VideoItem;
