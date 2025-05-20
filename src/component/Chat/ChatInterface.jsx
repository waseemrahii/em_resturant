"use client"

import { useState, useEffect, useRef } from "react"
import { FaPaperPlane, FaSearch, FaEllipsisV, FaPhone, FaVideo, FaImage, FaFile } from "react-icons/fa"
import TitleHead from "../Header/TitleHead"

const ChatInterface = () => {
  // State for contacts, messages, and active chat
  const [contacts, setContacts] = useState([])
  const [messages, setMessages] = useState({})
  const [activeContact, setActiveContact] = useState(null)
  const [messageInput, setMessageInput] = useState("")
  const [searchTerm, setSearchTerm] = useState("")
  const [loading, setLoading] = useState(true)
  const [showAttachmentOptions, setShowAttachmentOptions] = useState(false)

  // Ref for message container to auto-scroll to bottom
  const messageContainerRef = useRef(null)

  // Mock data for contacts
  const mockContacts = [
    {
      id: "c1",
      name: "Ahmed Khan",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      role: "Customer",
      lastMessage: "I'd like to know if my order is ready",
      lastMessageTime: "10:30 AM",
      unread: 2,
      online: true,
    },
    {
      id: "c2",
      name: "Fatima Ali",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      role: "Customer",
      lastMessage: "Thank you for the quick delivery!",
      lastMessageTime: "Yesterday",
      unread: 0,
      online: false,
    },
    {
      id: "c3",
      name: "Mohammad Driver",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg",
      role: "Delivery Driver",
      lastMessage: "I'm at the location but can't find the address",
      lastMessageTime: "Yesterday",
      unread: 1,
      online: true,
    },
    {
      id: "c4",
      name: "Zainab Customer",
      avatar: "https://randomuser.me/api/portraits/women/67.jpg",
      role: "Customer",
      lastMessage: "Is the restaurant open tomorrow?",
      lastMessageTime: "Monday",
      unread: 0,
      online: false,
    },
    {
      id: "c5",
      name: "Ali Driver",
      avatar: "https://randomuser.me/api/portraits/men/91.jpg",
      role: "Delivery Driver",
      lastMessage: "Order delivered successfully",
      lastMessageTime: "Sunday",
      unread: 0,
      online: true,
    },
  ]

  // Mock data for messages
  const mockMessages = {
    c1: [
      {
        id: "m1",
        sender: "c1",
        text: "Hello, I placed an order about 30 minutes ago. Order #12345",
        timestamp: "10:15 AM",
        read: true,
      },
      {
        id: "m2",
        sender: "me",
        text: "Hi Ahmed, let me check that for you.",
        timestamp: "10:18 AM",
        read: true,
      },
      {
        id: "m3",
        sender: "me",
        text: "Your order is being prepared and should be ready in about 10 minutes.",
        timestamp: "10:20 AM",
        read: true,
      },
      {
        id: "m4",
        sender: "c1",
        text: "Great, thank you! I'd like to know if my order is ready",
        timestamp: "10:30 AM",
        read: false,
      },
    ],
    c2: [
      {
        id: "m5",
        sender: "c2",
        text: "Hi, I just received my order and everything was perfect!",
        timestamp: "Yesterday, 7:30 PM",
        read: true,
      },
      {
        id: "m6",
        sender: "me",
        text: "We're glad to hear that, Fatima! Thank you for your feedback.",
        timestamp: "Yesterday, 7:35 PM",
        read: true,
      },
      {
        id: "m7",
        sender: "c2",
        text: "Thank you for the quick delivery!",
        timestamp: "Yesterday, 7:40 PM",
        read: true,
      },
    ],
    c3: [
      {
        id: "m8",
        sender: "c3",
        text: "Hello, I'm trying to deliver order #54321 but I can't find the address.",
        timestamp: "Yesterday, 6:15 PM",
        read: true,
      },
      {
        id: "m9",
        sender: "me",
        text: "Hi Mohammad, the address is 123 Main St, Apartment 4B. There should be a blue door at the entrance.",
        timestamp: "Yesterday, 6:18 PM",
        read: true,
      },
      {
        id: "m10",
        sender: "c3",
        text: "I'm at the location but can't find the address",
        timestamp: "Yesterday, 6:25 PM",
        read: false,
      },
    ],
    c4: [
      {
        id: "m11",
        sender: "c4",
        text: "Hello, what are your opening hours tomorrow?",
        timestamp: "Monday, 3:45 PM",
        read: true,
      },
      {
        id: "m12",
        sender: "me",
        text: "Hi Zainab, we're open from 11 AM to 10 PM tomorrow.",
        timestamp: "Monday, 3:50 PM",
        read: true,
      },
      {
        id: "m13",
        sender: "c4",
        text: "Is the restaurant open tomorrow?",
        timestamp: "Monday, 4:00 PM",
        read: true,
      },
    ],
    c5: [
      {
        id: "m14",
        sender: "c5",
        text: "I've picked up order #67890 and am on my way to deliver it.",
        timestamp: "Sunday, 1:30 PM",
        read: true,
      },
      {
        id: "m15",
        sender: "me",
        text: "Thanks for the update, Ali. What's the estimated delivery time?",
        timestamp: "Sunday, 1:32 PM",
        read: true,
      },
      {
        id: "m16",
        sender: "c5",
        text: "Should be there in about 15 minutes.",
        timestamp: "Sunday, 1:35 PM",
        read: true,
      },
      {
        id: "m17",
        sender: "c5",
        text: "Order delivered successfully",
        timestamp: "Sunday, 1:50 PM",
        read: true,
      },
    ],
  }

  // Load data on component mount
  useEffect(() => {
    // Simulate API call
    setLoading(true)
    setTimeout(() => {
      setContacts(mockContacts)
      setMessages(mockMessages)
      setActiveContact(mockContacts[0])
      setLoading(false)
    }, 1000)
  }, [])

  // Auto-scroll to bottom of messages when messages change or active contact changes
  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight
    }
  }, [messages, activeContact])

  // Filter contacts when search term changes
  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.role.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  // Handle sending a message
  const handleSendMessage = (e) => {
    e.preventDefault()

    if (!messageInput.trim() || !activeContact) return

    const newMessage = {
      id: `m${Date.now()}`,
      sender: "me",
      text: messageInput,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      read: true,
    }

    // Update messages
    setMessages((prevMessages) => ({
      ...prevMessages,
      [activeContact.id]: [...(prevMessages[activeContact.id] || []), newMessage],
    }))

    // Update last message in contacts
    setContacts((prevContacts) =>
      prevContacts.map((contact) =>
        contact.id === activeContact.id
          ? {
              ...contact,
              lastMessage: messageInput,
              lastMessageTime: "Just now",
            }
          : contact,
      ),
    )

    // Clear input
    setMessageInput("")
  }

  // Mark messages as read when opening a chat
  const handleContactSelect = (contact) => {
    // Mark all messages from this contact as read
    if (messages[contact.id]) {
      const updatedMessages = {
        ...messages,
        [contact.id]: messages[contact.id].map((msg) => ({
          ...msg,
          read: true,
        })),
      }
      setMessages(updatedMessages)
    }

    // Update unread count in contacts
    setContacts((prevContacts) => prevContacts.map((c) => (c.id === contact.id ? { ...c, unread: 0 } : c)))

    // Set active contact
    setActiveContact(contact)
  }

  // Handle attachment button click
  const handleAttachmentClick = () => {
    setShowAttachmentOptions(!showAttachmentOptions)
  }

  // Handle attachment selection
  const handleAttachmentSelect = (type) => {
    // In a real app, this would open a file picker or camera
    console.log(`Attachment type selected: ${type}`)
    setShowAttachmentOptions(false)

    // Simulate sending an attachment message
    const attachmentMessages = {
      image: "Sent an image",
      file: "Sent a file",
    }

    if (attachmentMessages[type] && activeContact) {
      const newMessage = {
        id: `m${Date.now()}`,
        sender: "me",
        text: attachmentMessages[type],
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        read: true,
        attachment: {
          type,
          url: type === "image" ? "https://via.placeholder.com/200" : "#",
        },
      }

      // Update messages
      setMessages((prevMessages) => ({
        ...prevMessages,
        [activeContact.id]: [...(prevMessages[activeContact.id] || []), newMessage],
      }))

      // Update last message in contacts
      setContacts((prevContacts) =>
        prevContacts.map((contact) =>
          contact.id === activeContact.id
            ? {
                ...contact,
                lastMessage: attachmentMessages[type],
                lastMessageTime: "Just now",
              }
            : contact,
        ),
      )
    }
  }

  return (
    <div className="p-4">
      <TitleHead title="Chat" desc="Communicate with customers and delivery personnel" />

      <div className="bg-white rounded-lg shadow-lg overflow-hidden h-[calc(100vh-200px)] flex">
        {/* Left Sidebar - Contacts */}
        <div className="w-full md:w-1/3 lg:w-1/4 border-r">
          {/* Search */}
          <div className="p-4 border-b">
            <div className="relative">
              <input
                type="text"
                placeholder="Search contacts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* Contacts List */}
          <div className="overflow-y-auto h-[calc(100%-73px)]">
            {loading ? (
              // Loading state
              <div className="p-4 space-y-4">
                {[...Array(5)].map((_, index) => (
                  <div key={index} className="flex items-center space-x-3 animate-pulse">
                    <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                    <div className="flex-1">
                      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                      <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : filteredContacts.length > 0 ? (
              // Contacts
              filteredContacts.map((contact) => (
                <div
                  key={contact.id}
                  onClick={() => handleContactSelect(contact)}
                  className={`p-4 flex items-start space-x-3 cursor-pointer hover:bg-gray-50 ${
                    activeContact?.id === contact.id ? "bg-blue-50" : ""
                  }`}
                >
                  <div className="relative">
                    <img
                      src={contact.avatar || "/placeholder.svg?height=48&width=48"}
                      alt={contact.name}
                      className="w-12 h-12 rounded-full object-cover"
                      onError={(e) => {
                        e.target.src = "/placeholder.svg?height=48&width=48"
                      }}
                    />
                    {contact.online && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium text-gray-800 truncate">{contact.name}</h3>
                      <span className="text-xs text-gray-500">{contact.lastMessageTime}</span>
                    </div>
                    <p className="text-sm text-gray-500 truncate">{contact.lastMessage}</p>
                    <span className="text-xs text-gray-400">{contact.role}</span>
                  </div>
                  {contact.unread > 0 && (
                    <div className="bg-primary-900 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {contact.unread}
                    </div>
                  )}
                </div>
              ))
            ) : (
              // No contacts found
              <div className="p-8 text-center text-gray-500">No contacts found</div>
            )}
          </div>
        </div>

        {/* Right Side - Chat */}
        <div className="hidden md:flex md:flex-col md:w-2/3 lg:w-3/4">
          {activeContact ? (
            <>
              {/* Chat Header */}
              <div className="p-4 border-b flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <img
                    src={activeContact.avatar || "/placeholder.svg?height=48&width=48"}
                    alt={activeContact.name}
                    className="w-10 h-10 rounded-full object-cover"
                    onError={(e) => {
                      e.target.src = "/placeholder.svg?height=48&width=48"
                    }}
                  />
                  <div>
                    <h3 className="font-medium text-gray-800">{activeContact.name}</h3>
                    <p className="text-xs text-gray-500">
                      {activeContact.online ? (
                        <span className="text-green-500">Online</span>
                      ) : (
                        <span className="text-gray-400">Offline</span>
                      )}
                      {" • "}
                      {activeContact.role}
                    </p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="p-2 text-gray-600 hover:text-gray-800 rounded-full hover:bg-gray-100">
                    <FaPhone />
                  </button>
                  <button className="p-2 text-gray-600 hover:text-gray-800 rounded-full hover:bg-gray-100">
                    <FaVideo />
                  </button>
                  <button className="p-2 text-gray-600 hover:text-gray-800 rounded-full hover:bg-gray-100">
                    <FaEllipsisV />
                  </button>
                </div>
              </div>

              {/* Messages */}
              <div ref={messageContainerRef} className="flex-1 p-4 overflow-y-auto">
                {messages[activeContact.id]?.length > 0 ? (
                  <div className="space-y-4">
                    {messages[activeContact.id].map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.sender === "me" ? "justify-end" : "justify-start"}`}
                      >
                        {message.sender !== "me" && (
                          <img
                            src={activeContact.avatar || "/placeholder.svg?height=36&width=36"}
                            alt={activeContact.name}
                            className="w-8 h-8 rounded-full object-cover mr-2 self-end"
                            onError={(e) => {
                              e.target.src = "/placeholder.svg?height=36&width=36"
                            }}
                          />
                        )}
                        <div
                          className={`max-w-[70%] ${message.sender === "me" ? "bg-primary-900 text-white" : "bg-gray-100 text-gray-800"} rounded-lg p-3`}
                        >
                          {message.attachment && message.attachment.type === "image" && (
                            <img
                              src={message.attachment.url || "/placeholder.svg"}
                              alt="Attachment"
                              className="rounded-lg mb-2 max-w-full"
                            />
                          )}
                          {message.attachment && message.attachment.type === "file" && (
                            <div className="bg-gray-200 p-2 rounded-lg mb-2 flex items-center">
                              <FaFile className="mr-2" />
                              <span>Document file</span>
                            </div>
                          )}
                          <p>{message.text}</p>
                          <div
                            className={`text-xs mt-1 ${message.sender === "me" ? "text-blue-100" : "text-gray-500"} flex justify-end`}
                          >
                            {message.timestamp}
                            {message.sender === "me" && <span className="ml-1">{message.read ? "✓✓" : "✓"}</span>}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="h-full flex items-center justify-center text-gray-500">No messages yet</div>
                )}
              </div>

              {/* Message Input */}
              <div className="p-4 border-t">
                <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
                  <div className="relative">
                    <button
                      type="button"
                      onClick={handleAttachmentClick}
                      className="p-2 text-gray-600 hover:text-gray-800 rounded-full hover:bg-gray-100"
                    >
                      <FaImage />
                    </button>

                    {/* Attachment Options */}
                    {showAttachmentOptions && (
                      <div className="absolute bottom-full left-0 mb-2 bg-white rounded-lg shadow-lg p-2 flex space-x-2">
                        <button
                          type="button"
                          onClick={() => handleAttachmentSelect("image")}
                          className="p-2 text-gray-600 hover:text-gray-800 rounded-full hover:bg-gray-100"
                          title="Send Image"
                        >
                          <FaImage />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleAttachmentSelect("file")}
                          className="p-2 text-gray-600 hover:text-gray-800 rounded-full hover:bg-gray-100"
                          title="Send File"
                        >
                          <FaFile />
                        </button>
                      </div>
                    )}
                  </div>

                  <input
                    type="text"
                    placeholder="Type a message..."
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />

                  <button
                    type="submit"
                    disabled={!messageInput.trim()}
                    className={`p-2 rounded-full ${
                      messageInput.trim()
                        ? "bg-primary-900 text-white hover:bg-primary-800"
                        : "bg-gray-200 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    <FaPaperPlane />
                  </button>
                </form>
              </div>
            </>
          ) : (
            <div className="h-full flex items-center justify-center text-gray-500">
              Select a contact to start chatting
            </div>
          )}
        </div>

        {/* Empty State for Mobile */}
        <div className="flex md:hidden items-center justify-center w-full h-full text-gray-500 p-4 text-center">
          Please use a larger screen to view the chat interface
        </div>
      </div>
    </div>
  )
}

export default ChatInterface
