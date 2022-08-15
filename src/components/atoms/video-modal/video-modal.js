import { useDispatch } from "react-redux";
import { setShowFileTypeModal } from "../../../redux/slices/searchSlice";
import ReactPlayer from "react-player/lazy";

const VideoModal = ({ title, url }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setShowFileTypeModal(false));
  };

  const formattedTitle = title.split(".")[0];
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-full my-6 mx-auto ">
          {/*Container size - Edit height and width below to control size of modal size*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-11/12 max-h-fit bg-white outline-none focus:outline-none mx-auto my-auto">
            {/*Video Title*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold text-center w-full">
                {formattedTitle}
              </h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={handleClick}
              >
                <span className=" text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                  X
                </span>
              </button>
            </div>
            {/*Video - Adjust width and height below to control size of video element*/}
            <div className="relative mx-auto my-auto flex-auto py-10 w-3/5 h-3/5">
              <ReactPlayer
                url={url}
                controls
                width="100%"
                height="100%"
                className="mx-auto my-auto"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default VideoModal;
