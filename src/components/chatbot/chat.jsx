
import { useState, useEffect, useRef } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import botmp4 from "../../assets/chatbot.mp4";

const Chat = () => {
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  // References
  const latestMessageRef = useRef(null);
  const videoRef = useRef(null); // Reference for the video element

  // Initialize the Gemini API
  const genAI = new GoogleGenerativeAI("AIzaSyCGeEZqf4MAQJrf8MNghDHearwdDe07njg");
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  // Toggle chat window visibility
  const toggleChat = () => {
    if (!isChatOpen && videoRef.current) {
      // Pause the video when chat opens
      videoRef.current.pause();
    }
    setIsChatOpen(!isChatOpen);
  };

  // Handle user input
  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  // Handle "Enter" key submission
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  // Send user message to Gemini API
  const sendMessage = async () => {
    if (userInput.trim() === "") return;

    setIsLoading(true);
    try {
      // Call Gemini API to get a response
      const result = await model.generateContent(userInput);
      const response = await result.response.text();

      // Add user and bot messages to the chat history
      setChatHistory((prevChatHistory) => [
        ...prevChatHistory,
        { type: "user", message: userInput },
        { type: "bot", message: response },
      ]);
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setUserInput("");
      setIsLoading(false);
    }
  };

  // Auto-scroll to the latest message when chat history updates
  useEffect(() => {
    if (latestMessageRef.current) {
      latestMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatHistory]);

  return (
    <div className="fixed bottom-[30px] right-[20px] z-[90]">
      {/* Glowing Text */}
      {!isChatOpen && (
        <p className="absolute -left-48 top-1/2 -translate-y-1/2 text-black text-lg font-semibold glow-animation">
          Hey,<strong className="text-3xl animate-pulse">sara</strong> this side <br />
        </p>
      )}

      {/* Circular Button */}
      <button
        onClick={toggleChat}
        className="w-16 h-16 rounded-full text-black p-[1px] font-sans font-semibold flex items-center justify-center shadow-lg  "
      >
        <video
          ref={videoRef}
          className="rounded-[50%] w-full h-full object-cover hover:scale-110 cursor-pointer hover:bg-red-800 border-[5px] border-red-200"
          src={botmp4}
          loop
          autoPlay
          muted
          disablePictureInPicture
          controlsList="nodownload nofullscreen"
        ></video>
      </button>

      {/* Chat Popup Window */}
      {isChatOpen && (
        <div className="w-80 h-96 bg-blue-300 shadow-lg rounded-lg p-4 flex flex-col">
          {/* Popup Header */}
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg font-bold text-black">Hey! How can I help you?</h2>
            <button className="text-white text-xl" onClick={toggleChat}>
              ✖
            </button>
          </div>

          {/* Chat History */}
          <div className="flex-1 overflow-y-auto mb-4 bg-white p-2 rounded">
            {chatHistory.map((chat, index) => (
              <div
                key={index}
                ref={index === chatHistory.length - 1 ? latestMessageRef : null}
                className={`my-2 p-2 rounded-lg ${
                  chat.type === "user"
                    ? "bg-blue-400 text-right text-white"
                    : "bg-gray-200 text-left"
                }`}
              >
                {chat.message}
              </div>
            ))}
          </div>

          {/* Input Field */}
          <div className="flex">
            <input
              type="text"
              className="flex-grow px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type your message..."
              value={userInput}
              onChange={handleUserInput}
              onKeyDown={handleKeyPress}
            />
            <button
              className="px-4 py-2 ml-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 focus:outline-none"
              onClick={sendMessage}
              disabled={isLoading}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
