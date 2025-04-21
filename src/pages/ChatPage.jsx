import React, { useState } from "react";

export default function ChatPage() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "سلام! چطور می‌تونم کمکت کنم؟" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages([...messages, { from: "user", text: input }]);
    setInput("");

    // شبیه‌سازی پاسخ هوش مصنوعی (تست)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: `تو گفتی: "${input}" 👀` },
      ]);
    }, 700);
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-900 text-white p-4">
      <h2 className="text-2xl font-bold text-center text-sky-400 mb-4">چت با GPTشید</h2>
      
      <div className="flex-1 overflow-y-auto bg-slate-800 rounded-xl p-4 space-y-2 mb-4 shadow-inner">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-3 rounded-xl max-w-xs ${
              msg.from === "user"
                ? "bg-sky-600 self-end text-right ml-auto"
                : "bg-slate-700 self-start text-left mr-auto"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          className="flex-1 p-3 rounded-xl bg-slate-700 text-white"
          placeholder="پیام خود را بنویسید..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="bg-sky-500 hover:bg-sky-600 px-4 py-2 rounded-xl"
        >
          ارسال
        </button>
      </div>
    </div>
  );
}
