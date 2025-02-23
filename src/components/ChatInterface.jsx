import './ChatInterface.css'

export default function ChatInterface() {
    const messages = [
      {
        id: 1,
        user: "coolmate",
        avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%20633-GXmbqmVAD6mg5MIYAyEtSflYuTOHSI.png",
        message: "its been an hour window since it started they just always",
        time: "10:13",
      },
      {
        id: 2,
        user: "coolmate",
        avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%20633-GXmbqmVAD6mg5MIYAyEtSflYuTOHSI.png",
        message: "Hello all friends",
        time: "10:13",
      },
      {
        id: 3,
        user: "coolmate",
        avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%20633-GXmbqmVAD6mg5MIYAyEtSflYuTOHSI.png",
        message: "its all time waiting and show now low 😞",
        time: "10:13",
      },
      {
        id: 4,
        user: "coolmate",
        avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%20633-GXmbqmVAD6mg5MIYAyEtSflYuTOHSI.png",
        message:
          'Please provide camera access through your browser or device settings. Click "Allow" when prompted, or adjust settings accordingly.',
        time: "10:13",
      },
      {
        id: 5,
        user: "HATEfriends",
        avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%20633-GXmbqmVAD6mg5MIYAyEtSflYuTOHSI.png",
        message: "Good luck everybody 🍀",
        time: "10:13",
      },
      {
        id: 6,
        user: "coolmate",
        avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%20633-GXmbqmVAD6mg5MIYAyEtSflYuTOHSI.png",
        message: "Hello all friends",
        time: "10:13",
      },
      {
        id: 7,
        user: "coolmate",
        avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%20633-GXmbqmVAD6mg5MIYAyEtSflYuTOHSI.png",
        message: "how you been mate? It's been a while",
        time: "10:13",
      },
      {
        id: 8,
        user: "coolmate",
        avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%20633-GXmbqmVAD6mg5MIYAyEtSflYuTOHSI.png",
        message: "Oooooofffff",
        time: "10:13",
      },
      {
        id: 9,
        user: "coolmate",
        avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%20633-GXmbqmVAD6mg5MIYAyEtSflYuTOHSI.png",
        message: "errr how did i move to sports",
        time: "10:13",
      },
      {
        id: 10,
        user: "coolmate",
        avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%20633-GXmbqmVAD6mg5MIYAyEtSflYuTOHSI.png",
        message: "Hello all friends",
        time: "10:13",
      },
      {
        id: 11,
        user: "coolmate",
        avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%20633-GXmbqmVAD6mg5MIYAyEtSflYuTOHSI.png",
        message: "they moved the start times for fd back 30 min",
        time: "10:13",
      },
      {
        id: 12,
        user: "coolmate",
        avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%20633-GXmbqmVAD6mg5MIYAyEtSflYuTOHSI.png",
        message: "thought the mod had gone mad asking not to share casino bets lol",
        time: "10:13",
      },
    ]
  
    return (
      <div className="chat-container">
        <div className="chat-header">
          <div className="header-left">
            <svg className="chat-icon" viewBox="0 0 24 24" width="24" height="24">
              <path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
            </svg>
            <span>Chat</span>
          </div>
          <div className="header-right">
            <span className="online-status">
              <span className="status-dot"></span>
              12,490
            </span>
            <svg className="arrow-icon" viewBox="0 0 24 24" width="24" height="24">
              <path fill="currentColor" d="M9.4 18L8 16.6l4.6-4.6L8 7.4 9.4 6l6 6z" />
            </svg>
          </div>
        </div>
  
        <div className="chat-messages">
          {messages.map((msg) => (
            <div key={msg.id} className="message-container">
              <img src={msg.avatar || "/placeholder.svg"} alt={msg.user} className="user-avatar" />
              <div className="message-content">
                <div className="message-header">
                  <span className="username">{msg.user}</span>
                  <span className="timestamp">{msg.time}</span>
                </div>
                <div className="message-bubble">{msg.message}</div>
              </div>
            </div>
          ))}
        </div>
  
        <div className="chat-input">
          <input type="text" placeholder="Enter your message" />
          <button className="send-button">
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path fill="currentColor" d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </button>
        </div>
      </div>
    )
  }
  
  