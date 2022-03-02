import { useState } from "react";

const DialogBox = () => {
  const [message, setMessage] = useState("");
  const [conversation, setConversation] = useState([
    {
      event: "chat",
      speaker: "Help",
      message:
        "Thank you for selecting the chat option. We will connect you to the next available agent.",
      id: 1,
    },
    {
      event: "chat",
      speaker: "Help",
      message:
        "Hi, my name is James. I see you are having problems with your generator and I can also see what our support center had provided for help. How can I help you? ",
      id: 2,
    },
    {
      event: "chat",
      speaker: "You",
      message: "I have questions about how to maintain my generator",
      id: 3,
    },
    {
      event: "chat",
      speaker: "Help",
      message:
        "Thank you. Just to verify, your generator model is the  LP2000?.",
      id: 4,
    },
  ]);

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    conversation.push({
      event: "chat",
      speaker: "You",
      message: message,
      id: conversation.length + 1,
    });
    setMessage("");
  };

  return (
    <section className="w-full h-full border">
      <h1 className="font-semibold text-center text-2xl py-2">Conversation</h1>
      <div className="grid overflow-auto max-h-[450px]">
        {conversation.map(({ speaker, message, event, id }) => {
          return (
            <div className="mx-5" key={id}>
              {speaker === "Help" ? (
                <div className="my-2 py-3 bg-gray-200 border rounded-3xl shadow inline-block">
                  <p className="px-2">
                    <span className="text-red-500 mr-2 font-bold">
                      {speaker}{" "}
                    </span>
                    {message}
                  </p>
                </div>
              ) : (
                <div className="block">
                  <div className="my-2 py-3 bg-blue-200 border rounded-3xl shadow float-right inline-block">
                    <p className=" px-2 ">
                      {message}
                      <span className="text-green-700 ml-2 font-bold">
                        {speaker}
                      </span>
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="py-2 border-t-4">
        <form onSubmit={handleSubmit} className="mx-4">
          <input
            type="text"
            placeholder="Type here"
            value={message}
            className="w-full border-2 rounded"
            onChange={handleChange}
          />
        </form>
      </div>
    </section>
  );
};

export default DialogBox;
