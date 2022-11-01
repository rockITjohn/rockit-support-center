import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setActiveChat } from "../../../redux/slices/chatSlice";
import { useSelector } from "react-redux";

const ChatWidget = () => {
  const connect = window.connect;

  const dispatch = useDispatch();
  const {
    region,
    apiGatewayEndpoint,
    contactFlowId,
    enableAttachments,
    instanceId,
  } = useSelector((state) => state.appReducer);

  const { emailAddress, previousSearches, customerName } = useSelector(
    (state) => state.persistedReducer
  );

  let chatSession;

  const successHandler = (session) => {
    chatSession = session;

    chatSession.onIncoming((data) => {
      console.log("incoming message:|| " + JSON.stringify(data));
    });

    chatSession.onOutgoing((data) => {
      console.log("outgoing message: " + JSON.stringify(data));
    });

    chatSession.onChatDisconnected((data) => {
      // TODO: If the agent disconnects the chat, and the user clicks start chat again, there is an error with incoming messages
      console.log("chat disconnected", data);
      dispatch(setActiveChat(false));
    });

    chatSession.incomingItemDecorator = function (item) {
      console.log("inconing Item Decorator");
    };
  };

  const failureHandler = (e) => {
    console.log("Failure", e);
  };

  const getContactAttributes = () => {
    let attrs = {
      previousSearches: JSON.stringify(previousSearches),
    };
    if (emailAddress !== "") {
      attrs = { ...attrs, emailAddress: emailAddress };
    }
    if (customerName !== "") {
      attrs = { ...attrs, customerName: customerName };
    }
    return JSON.stringify(attrs);
  };

  useEffect(() => {
    try {
      console.log("Running ChatInterface.init");
      connect.ChatInterface.init({
        containerId: "rootId",
        headerConfig: {
          isHTML: true,
          render: () => {
            return `
              <div className="py-4 text-white text-center gradient">
                <h1 className="font-bold text-2xl text-center">Hello!</h1>
                <p>Please wait for the next available agent. </p>
              </div>
            `;
          },
        },
      });
      console.log("Running ChatInterface.initiateChat");
      connect.ChatInterface.initiateChat(
        {
          name: "Customer",
          region,
          apiGatewayEndpoint,
          contactAttributes: getContactAttributes(),
          contactFlowId,
          instanceId,
          featurePermissions: {
            ATTACHMENTS: enableAttachments,
          },
        },
        successHandler,
        failureHandler
      );
      console.log("Chat Initiated");
    } catch (e) {
      console.error("Error loading connect.ChatInterface.init", e);
    }

    return () => {};
    // eslint-disable-next-line
  }, []);

  return (
    <div className="">
      <div className="chat-container bg-white rounded">
        <div id="rootId" />
      </div>
    </div>
  );
};

export default ChatWidget;
