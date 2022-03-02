import ChannelSwitcher from "../channel-switcher/channel-switcher";
import { useState } from "react";

const QueryBox = () => {
  const [showChannelSwitcher, setShowChannelSwitcher] = useState(false);

  const handleSetShowChannelSwitcher = () => {
    setShowChannelSwitcher(!showChannelSwitcher);
  };
  return (
    <section className="w-full h-1/4 border bg-[rgba(209,35,44,0.8)] py-2">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-5">
          <div className="md:col-span-3">
            <div className="py-5">
              <h1 className="font-bold text-2xl text-center">
                Just ask me, <span className="font-bold italic">Anything</span>
              </h1>
            </div>
            <div className="text-center">
              <textarea
                type="text"
                className="h-12 w-10/12"
                name=""
                id=""
                placeholder="Ask your question here"
              ></textarea>
            </div>
          </div>

          <div className="mx-auto my-2 md:my-auto md:col-span-2 w-3/4 md:w-full">
            <ChannelSwitcher
              handleSetShowChannelSwitcher={handleSetShowChannelSwitcher}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default QueryBox;
