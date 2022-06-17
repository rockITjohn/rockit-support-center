import { createRef, useState } from "react";
import { createPopper } from "@popperjs/core";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  setSelectedDocumentType,
  setFilteredDocumentItems,
} from "../../../redux/slices/searchSlice";

const DocumentPopover = ({
  handleDocumentsClick,
  documentItems,
  boldedItem,
}) => {
  // Redux logic
  const dispatch = useDispatch();
  const { documentItemTypes } = useSelector((state) => state.searchReducer);

  // Filter document item types to remove duplicates
  const docItemTypes = new Set(documentItemTypes);

  // Handle document type onClick
  const handleDocumentTypeSelection = (docType) => {
    dispatch(setSelectedDocumentType(docType));
    dispatch(setFilteredDocumentItems(docType));
  };

  // Popper Logic
  const [popoverShow, setPopoverShow] = useState(false);
  const btnRef = createRef();
  const popoverRef = createRef();
  const openPopover = () => {
    console.log("Running openPopover");
    createPopper(btnRef.current, popoverRef.current, {
      placement: "right-start",
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [-85, 15],
          },
        },
      ],
    });
    setPopoverShow(true);
  };
  const closePopover = () => {
    setPopoverShow(false);
  };

  return (
    <>
      <div className="flex flex-wrap">
        {/* The below is the code for the button that you click on to initiate the popout */}
        <div>
          <button
            className={`disabled:cursor-not-allowed disabled:text-gray-200 font-bold + ${
              boldedItem === "documents"
                ? "text-black underline decoration-primary-blue underline-offset-[13px] decoration-2 outline-none focus:outline-none ease-linear transition-all duration-150"
                : "text-gray-400"
            }`}
            disabled={documentItems.length === 0}
            type="button"
            onClick={() => {
              popoverShow ? closePopover() : openPopover();
              handleDocumentsClick();
            }}
            ref={btnRef}
          >
            Documents
          </button>
          {/* This is the code for the popover */}
          <div
            className={
              (popoverShow ? "" : "hidden ") +
              "bg-white text-black border-2 mx-3 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded-lg"
            }
            ref={popoverRef}
          >
            <div>
              <div className="p-3">
                <div>
                  <p className="border-b-2">Document Types</p>
                </div>
                <div className="col-span-1 grid">
                  <button
                    onClick={() => handleDocumentTypeSelection("all")}
                    className="cursor-pointer"
                  >
                    All
                  </button>
                  {docItemTypes.map((docType) => {
                    return (
                      <button
                        onClick={() => handleDocumentTypeSelection(docType)}
                        key={docType}
                        className="cursor-pointer"
                      >
                        {docType}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DocumentPopover;
