import React, { useContext,useState,useEffect } from "react";
import { Mycontext } from "../context/MyContext";
import rocket from "../../public/animat-rocket-color.gif"

export default function Chatbot() {
  const { question } = useContext(Mycontext);
  const [lastQuestionIndex, setLastQuestionIndex] = useState(null);

  useEffect(() => {
    setLastQuestionIndex(question.length - 1);
  }, [question]);

  return (
    <div className="mt-5 sm:h-[430px] h-auto overflow-y-scroll">
      {question.length == 0 ? <div className="sm:w-2/3 w-full mx-auto">
        <h1 className="sm:text-8xl text-5xl  text-cyan-400">Hello,Dear</h1>
        <h1 className="sm:text-8xl text-5xl text-slate-300 mt-10">How can I help you today?</h1>
        <div className="sm:hidden">
          <img src={rocket} alt="" />
        </div>
      </div> :question.map((res, index) => (
        <ChatMessage
          key={index}
          question={res.que}
          isLast={index === lastQuestionIndex}
          answer={res.ans
            .replace(/##.*?\n/g, "")
            .replace(/\*\*(.*?)\*\*/g, "$1")}
        />
      ))}
    </div>
  );
}

const ChatMessage = ({ question, answer,isLast }) =>{ 
  useEffect(() => {
    if (isLast) {
      const lastQuestionElement = document.querySelector(`[data-last-question="true"]`);
      if (lastQuestionElement) {
        lastQuestionElement.scrollIntoView({ behavior: 'smooth' });
        lastQuestionElement.focus();
      }
    }
  }, [isLast]);

  return (
  <div data-last-question={isLast ? "true" : "false"} className="sm:w-2/3 w-4/5 mx-auto text-justify">
    <div className="chat chat-start">
      <div className="chat-bubble">{question}</div>
    </div>
    <CodeBlock className="mt-4">{answer}</CodeBlock>
  </div>
);}

const CodeBlock = ({ children, className }) => (
  <pre
    className={`font-mono whitespace-pre-wrap overflow-wrap-break-word p-4 border border-gray-300 rounded bg-gray-100 max-h-300 mb-2 overflow-y-auto ${className}`}
  >
    {children}
  </pre>
);
