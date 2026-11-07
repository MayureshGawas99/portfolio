import { useEffect, useRef, useState } from "react";
import { MdArrowForward, MdChat, MdClose, MdSend } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const suggestedQuestions = [
  "What projects have you built?",
  "Tell me about your experience",
  "What technologies do you use?",
];

const getReply = (question) => {
  const text = question.toLowerCase();

  if (/\b(hi|hello|hey|greetings)\b/.test(text)) {
    return {
      text: "Hey, adventurer! I can help you explore Narayan's projects, skills, and experience. What would you like to know?",
    };
  }

  if (/\b(resumes?|c\.?v\.?s?)\b/.test(text)) {
    return {
      text: "You can find Narayan's resume on the About page, along with his profile and social links.",
      action: { label: "Visit About Me", path: "/about" },
    };
  }

  if (/\b(experiences?|careers?|deutsche bank|dodas|internships?|jobs?|employment|work histories?)\b/.test(text)) {
    return {
      text: "Narayan is a Senior Analyst at Deutsche Bank. Before that, he completed a six-month internship at DODAS (Acknoledger). His work includes CI/CD improvements, full-stack development, performance optimization, and service tooling.",
      action: { label: "View experience", path: "/work-experience" },
    };
  }

  if (/\b(skills?|technolog(?:y|ies)|tech stacks?|languages?|frameworks?|tools?|javascript|python|java)\b/.test(text)) {
    return {
      text: "Narayan is a full-stack developer. The portfolio highlights Python, Java, C, and JavaScript, alongside web technologies such as React, Node.js, Express, and MongoDB.",
      action: { label: "Explore skills", path: "/skills" },
    };
  }

  if (/\b(projects?|build(?:s|ing)?|built|work samples?|blog ?site|prayog|e-?commerce|ecom|clipboard(?: manager)?|erc.?404|cryptoreports|ordinals|donbit|btc\.fi)\b/.test(text)) {
    return {
      text: "Featured work includes BlogSite (AI Blog Writing), Prayog, an e-commerce app, and a macOS Clipboard Manager. The portfolio also features web3 projects from Narayan's DODAS experience.",
      action: { label: "Browse projects", path: "/projects" },
    };
  }

  if (/\b(contacts?|emails?|linkedin|github|socials?|connect(?:ion|ions|ing)?|reach(?: out)?)\b/.test(text)) {
    return {
      text: "You can connect with Narayan through LinkedIn or GitHub, and find more developer profiles on the About page.",
      action: { label: "Find social links", path: "/about" },
    };
  }

  if (/\b(worlds?|minecraft|plays?|playing|explores?|games?)\b/.test(text)) {
    return {
      text: "This portfolio is built like a Minecraft adventure! Head to the Projects page and choose Play World to explore the interactive world.",
      action: { label: "Explore the world", path: "/projects" },
    };
  }

  if (/\b(advancements?|achievements?|milestones?|academic progress|coding progress|career progress)\b/.test(text)) {
    return {
      text: "Narayan's portfolio tracks academic, coding, and corporate advancements across three tabs. Open the page to explore each achievement path.",
      action: { label: "View advancements", path: "/advancements" },
    };
  }

  if (/\b(who|about|narayan|yourself|developer|person)\b/.test(text)) {
    return {
      text: "Narayan Gawas is a full-stack web developer who enjoys turning ideas into creative, immersive digital experiences.",
      action: { label: "Meet Narayan", path: "/about" },
    };
  }

  return {
    text: "I don't have that answer in my inventory yet. Try asking about Narayan's projects, skills, work experience, or how to get in touch.",
  };
};

const MinecraftChatbot = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 0,
      sender: "guide",
      text: "Welcome, adventurer! Ask me about Narayan's projects, skills, or experience.",
    },
  ]);
  const messageId = useRef(1);
  const messageListRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      messageListRef.current?.scrollTo({
        top: messageListRef.current.scrollHeight,
        behavior: "smooth",
      });
      inputRef.current?.focus();
    }
  }, [isOpen, messages]);

  const sendQuestion = (event) => {
    event.preventDefault();
    const submittedQuestion = question.trim();

    if (!submittedQuestion) {
      return;
    }

    const reply = getReply(submittedQuestion);
    setMessages((currentMessages) => [
      ...currentMessages,
      {
        id: messageId.current++,
        sender: "player",
        text: submittedQuestion,
      },
      {
        id: messageId.current++,
        sender: "guide",
        ...reply,
      },
    ]);
    setQuestion("");
  };

  return (
    <div className="fixed bottom-2 right-2 z-[1000] font-['TextFont'] sm:bottom-5 sm:right-5">
      {isOpen && (
        <section
          className="mb-3 flex h-[min(520px,calc(100dvh-100px))] min-h-[340px] w-[min(370px,calc(100vw-32px))] flex-col overflow-hidden border-[3px] border-[#101110] bg-[#171a17] text-[#f5f5f5] shadow-[0_8px_30px_rgba(0,0,0,0.55)] outline outline-2 outline-[#c5c5c5]"
          aria-label="Minecraft portfolio guide"
        >
          <header className="flex items-center gap-[11px] border-b-[3px] border-[#1c2719] bg-gradient-to-br from-[#496b2f] to-[#293e24] p-[13px]">
            <div
              className="grid h-10 w-10 flex-none place-items-center border-2 border-[#a9c77d] bg-[#314a2a] text-[23px] text-white"
              aria-hidden="true"
            >
              <MdChat />
            </div>
            <div className="flex-1">
              <h2 className="m-0 text-base font-normal text-white">
                Overworld Guide
              </h2>
              <p className="mt-1 flex items-center gap-[6px] text-[11px] text-[#d3e2c7]">
                <span className="h-[7px] w-[7px] rounded-full bg-[#a4e169]" />
                Ready to help
              </p>
            </div>
            <button
              type="button"
              className="grid h-9 w-9 flex-none place-items-center border-2 border-[#a5a5a5] border-b-[#555] border-r-[#555] bg-[#292d29] text-xl text-white"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              <MdClose />
            </button>
          </header>

          <div
            className="flex flex-1 flex-col gap-3 overflow-y-auto overscroll-contain bg-[#141714] p-[15px]"
            ref={messageListRef}
            role="log"
            aria-live="polite"
            aria-relevant="additions"
          >
            {messages.map((message) => (
              <div
                className={`max-w-[90%] break-words border-2 px-3 py-[10px] text-xs leading-[1.65] ${
                  message.sender === "player"
                    ? "self-end border-[#718e5e] bg-[#3e5932] text-white"
                    : "self-start border-[#414641] bg-[#292e29] text-[#f5f5f5]"
                }`}
                key={message.id}
              >
                {message.sender === "guide" && (
                  <span className="mb-[5px] block font-['BoldFont'] text-[9px] tracking-wide text-[#bfd69f]">
                    GUIDE
                  </span>
                )}
                <p>{message.text}</p>
                {message.action && (
                  <button
                    type="button"
                    className="mt-[9px] inline-flex items-center gap-[5px] border border-[#91ad71] bg-[#496b2f] px-2 py-[5px] text-[10px] text-white hover:bg-[#5b7c3d]"
                    onClick={() => {
                      setIsOpen(false);
                      navigate(message.action.path);
                    }}
                  >
                    {message.action.label}
                    <MdArrowForward aria-hidden="true" />
                  </button>
                )}
              </div>
            ))}

            {messages.length === 1 && (
              <div className="flex flex-col items-start gap-[7px]">
                <span className="font-['BoldFont'] text-[9px] tracking-wide text-[#bfd69f]">
                  TRY ASKING
                </span>
                {suggestedQuestions.map((suggestion) => (
                  <button
                    type="button"
                    key={suggestion}
                    onClick={() => setQuestion(suggestion)}
                    className="border border-[#525b50] bg-[#252b25] px-[9px] py-[7px] text-left text-[10px] text-[#e6eadf] hover:bg-[#5b7c3d]"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}
          </div>

          <form
            className="flex gap-2 border-t-2 border-[#414641] bg-[#222622] p-[10px]"
            onSubmit={sendQuestion}
          >
            <label className="sr-only" htmlFor="chat-question">
              Ask the Overworld Guide
            </label>
            <input
              id="chat-question"
              ref={inputRef}
              type="text"
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              placeholder="Ask a question..."
              maxLength={300}
              className="w-full min-w-0 border-2 border-[#555d53] bg-[#111411] px-[10px] py-[9px] text-[11px] text-white outline-none placeholder:text-[#a4a89f] focus:border-[#a6c77e]"
            />
            <button
              type="submit"
              aria-label="Send question"
              disabled={!question.trim()}
              className="grid h-9 w-9 flex-none place-items-center border-2 border-[#a5a5a5] border-b-[#555] border-r-[#555] bg-[#496b2f] text-xl text-white disabled:cursor-not-allowed disabled:bg-[#414641] disabled:text-[#92978d]"
            >
              <MdSend aria-hidden="true" />
            </button>
          </form>
        </section>
      )}

      <button
        type="button"
        className="ml-auto flex items-center justify-center gap-2 border-2 border-[#b2c89b] border-b-4 border-r-4 border-b-[#243b20] border-r-[#243b20] bg-[#45692f] p-2 text-xs text-white shadow-[0_3px_8px_rgba(0,0,0,0.45)] hover:bg-[#567d3c]"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close portfolio guide" : "Open portfolio guide"}
      >
        {isOpen ? (
          <MdClose className="text-xl" aria-hidden="true" />
        ) : (
          <MdChat className="text-xl" aria-hidden="true" />
        )}
      </button>
    </div>
  );
};

export default MinecraftChatbot;
