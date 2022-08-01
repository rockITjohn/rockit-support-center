import { createRef, useState } from "react";
import { createPopper } from "@popperjs/core";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  setSelectedDocumentType,
  setFilteredDocumentItems,
} from "../../../redux/slices/searchSlice";
import { ReactComponent as DownSvg } from "../../../assets/chevron-down.svg";
import { ReactComponent as UpSvg } from "../../../assets/chevron-up.svg";

const DocumentPopover = () => {
  // Redux logic
  const dispatch = useDispatch();
  const { documentItemTypes, selectedFormattedDocumentType } = useSelector(
    (state) => state.searchReducer
  );

  // Filter document item types to remove duplicates
  const docItemTypes = new Set(documentItemTypes);

  // Handle document type onClick
  const handleDocumentTypeSelection = (docType) => {
    dispatch(setSelectedDocumentType(docType));
    dispatch(setFilteredDocumentItems());
    setPopoverShow(false);
  };

  // Popper Logic
  const [popoverShow, setPopoverShow] = useState(false);
  const btnRef = createRef();
  const popoverRef = createRef();
  const openPopover = () => {
    createPopper(btnRef.current, popoverRef.current, {
      placement: "bottom",
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
            className="text-black ease-linear transition-all duration-700"
            type="button"
            onClick={() => {
              popoverShow ? closePopover() : openPopover();
            }}
            ref={btnRef}
          >
            {selectedFormattedDocumentType}
            <span className="inline-block">
              {popoverShow ? (
                <UpSvg className="h-5 relative top-[5px]" />
              ) : (
                <DownSvg className="h-5 relative top-[5px]" />
              )}
            </span>
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
                    onClick={() => handleDocumentTypeSelection("All")}
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
