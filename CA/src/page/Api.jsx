import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import "../style/Api.css"; 
import Logo from "../assets/logo 3.svg";

function ModernChatbot() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [chat]);

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const sendMessage = async () => {
    if (!message.trim()) return;
  
    const userMsg = { type: "user", text: message };
    setChat((prev) => [...prev, userMsg]);
    setMessage("");
    setIsLoading(true);
  
    try {
      const res = await axios.post("http://localhost:5001/chat", { message });
      const isCode = containsCode(res.data.reply);
      const botMsg = { type: "bot", text: res.data.reply, isCode };
      setChat((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error("Error talking to backend:", err);
      setChat((prev) => [
        ...prev,
        { type: "bot", text: "Error: Cannot connect to chatbot." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const containsCode = (text) => {
    const codePatterns = [
      /```[\s\S]*?```/,           
      /<[a-z]+(\s+[a-z]+=".*?")*>/i,  
      /function\s+\w+\s*\(/,      
      /\bconst\b|\blet\b|\bvar\b|\bimport\b|\bexport\b/,  
      /\bclass\b.*\{/,           
      /^\s*if\s*\(.*\)\s*\{/m,   
      /^\s*for\s*\(.*\)\s*\{/m,   
      /^\s*while\s*\(.*\)\s*\{/m, 
      /^def\s+\w+\s*\(/m,         
      /^import\s+[\w.]+/m,        
      /^from\s+[\w.]+\s+import/m, 
    ];
    
    return codePatterns.some(pattern => pattern.test(text));
  };
  
  const copyToClipboard = (text) => {
    const cleanedText = text.replace(/^```[\w]*\n|```$/g, '');
    navigator.clipboard.writeText(cleanedText);
    const copyBtn = document.activeElement;
    const originalText = copyBtn.textContent;
    copyBtn.textContent = "Copied!";
    setTimeout(() => {
      copyBtn.textContent = originalText;
    }, 2000);
  };

  const formatMessage = (msg) => {
    if (msg.isCode) {
      if (msg.text.match(/^```[\s\S]*?```$/)) {
        const codeMatch = msg.text.match(/^```(\w*)\n([\s\S]*?)```$/);
        const language = codeMatch?.[1] || '';
        const code = codeMatch?.[2] || msg.text;
        
        return (
          <div className="code-block">
            <div className="code-header">
              <span className="code-language">{language || 'code'}</span>
              <button className="copy-button" onClick={() => copyToClipboard(code)}>
                <svg className="copy-icon" viewBox="0 0 24 24">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
                Copy
              </button>
            </div>
            <pre><code>{code}</code></pre>
          </div>
        );
      } else {
        return (
          <div className="code-block">
            <div className="code-header">
              <span className="code-language">code</span>
              <button className="copy-button" onClick={() => copyToClipboard(msg.text)}>
                <svg className="copy-icon" viewBox="0 0 24 24">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
                Copy
              </button>
            </div>
            <pre><code>{msg.text}</code></pre>
          </div>
        );
      }
    }
  
    return (
      <div className="text-block">
        <div className="text-content">{msg.text}</div>
        <button className="text-copy-button" onClick={() => copyToClipboard(msg.text)} aria-label="Copy text">
          <svg className="copy-icon" viewBox="0 0 24 24">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
        </button>
      </div>
    );
  };

  return (
    <div className={`chatbot-container ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="chatbot-wrapper">
        <header className="chatbot-header">
          {/* <div className="logo-container">
            <div className="logo">🤖</div>
            <h1> Assistant</h1>
          </div> */}
                    <div className="logo-container">
                      <img src={Logo} alt="AI Logo" className="logo-image" />
                      <h1> Assistant</h1>
                    </div>

          <div className="chatbot-controls">
            <button className="theme-toggle" onClick={() => setIsDarkMode(!isDarkMode)} aria-label="Toggle theme">
              {isDarkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </header>
        
        <div className="messages-container">
          {chat.length === 0 ? (
            <div className="welcome-screen">
              <div className="welcome-icon">👋</div>
              <h2>Explore Career </h2>
              <p>Ask me anything! I'm here to help.</p>
              <div className="suggestion-chips">
                <button onClick={() => setMessage("Tell me a joke")}>Carrer Choose</button>
                <button onClick={() => setMessage("What can you do?")}>What can you do?</button>
                <button onClick={() => setMessage("Write some code")}>Explore Your Knowlage</button>
              </div>
            </div>
          ) : (
            <div className="messages-list">
              {chat.map((msg, i) => (
                <div key={i} className={`message-item ${msg.type}-message`}>
                  {/* <div className="message-avatar">
                    {msg.type === "user" ? "👤" : "🤖"}
                  </div> */}

                    <div className="message-avatar">
                      {msg.type === "user" ? "👤" : (
                        <img src={Logo} alt="AI Avatar" className="ai-avatar" />
                      )}
                    </div>


                  <div className="message-bubble">
                    {formatMessage(msg)}
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="message-item bot-message">
                  <div className="message-avatar"></div>
                  <div className="message-bubble">
                    <div className="typing-indicator">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>
        
        <footer className="input-container">
          <div className="input-wrapper">
            <input
              ref={inputRef}
              type="text"
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              disabled={isLoading}
            />
            <button 
              className={`send-button ${message.trim() ? 'active' : ''}`}
              onClick={sendMessage}
              disabled={isLoading || !message.trim()}
              aria-label="Send message"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default ModernChatbot;
