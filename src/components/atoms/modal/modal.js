import { useDispatch } from "react-redux";
import { setShowModal } from "../../../redux/slices/searchSlice";
import ReactPlayer from "react-player/lazy";

const Modal = ({ title, url }) => {
  // const [showModal, setShowModal] = useState(true);
  console.log("Title", title, "Url", url);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setShowModal(false));
  };
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-6xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">{title}</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={handleClick}
              >
                <span className=" text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                  X
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 mx-auto my-auto flex-auto">
              <ReactPlayer url={url} controls="true" />
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default Modal;
