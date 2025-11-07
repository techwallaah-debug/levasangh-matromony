import { useState, useEffect, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  ChevronLeft,
  Send,
  Image as ImageIcon,
  Smile,
  Check,
  CheckCheck,
  Phone,
  Video,
  MoreVertical,
  Search,
} from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface Message {
  id: string;
  senderId: string;
  text: string;
  timestamp: Date;
  status: "sent" | "delivered" | "read";
  imageUrl?: string;
}

interface Conversation {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  lastMessage: string;
  lastMessageTime: Date;
  unreadCount: number;
  online: boolean;
  typing: boolean;
}

const Chat = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const selectedUserId = searchParams.get("userId");
  
  const [messageText, setMessageText] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Mock conversations data
  const [conversations] = useState<Conversation[]>([
    {
      id: "1",
      userId: "1",
      userName: "Priya Sharma",
      userAvatar: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=100",
      lastMessage: "Hi! Thanks for showing interest.",
      lastMessageTime: new Date(Date.now() - 1000 * 60 * 5),
      unreadCount: 2,
      online: true,
      typing: false,
    },
    {
      id: "2",
      userId: "2",
      userName: "Rahul Verma",
      userAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
      lastMessage: "Would love to know more about you",
      lastMessageTime: new Date(Date.now() - 1000 * 60 * 60 * 2),
      unreadCount: 0,
      online: false,
      typing: false,
    },
    {
      id: "3",
      userId: "3",
      userName: "Anjali Patel",
      userAvatar: "https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?w=100",
      lastMessage: "Looking forward to talking!",
      lastMessageTime: new Date(Date.now() - 1000 * 60 * 60 * 24),
      unreadCount: 0,
      online: true,
      typing: false,
    },
  ]);

  // Mock messages data
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      senderId: "1",
      text: "Hi! Thanks for showing interest in my profile.",
      timestamp: new Date(Date.now() - 1000 * 60 * 10),
      status: "read",
    },
    {
      id: "2",
      senderId: "current",
      text: "Hello! I'd love to know more about you.",
      timestamp: new Date(Date.now() - 1000 * 60 * 8),
      status: "read",
    },
    {
      id: "3",
      senderId: "1",
      text: "Sure! What would you like to know?",
      timestamp: new Date(Date.now() - 1000 * 60 * 6),
      status: "read",
    },
    {
      id: "4",
      senderId: "current",
      text: "Tell me about your hobbies and interests.",
      timestamp: new Date(Date.now() - 1000 * 60 * 5),
      status: "delivered",
    },
  ]);

  const selectedConversation = conversations.find(c => c.userId === selectedUserId);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!messageText.trim() || !selectedUserId) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      senderId: "current",
      text: messageText,
      timestamp: new Date(),
      status: "sent",
    };

    setMessages([...messages, newMessage]);
    setMessageText("");

    // Simulate message delivery
    setTimeout(() => {
      setMessages(prev =>
        prev.map(msg =>
          msg.id === newMessage.id ? { ...msg, status: "delivered" } : msg
        )
      );
    }, 1000);
  };

  const handleImageUpload = () => {
    toast({
      title: "Feature Coming Soon",
      description: "Image sharing will be available soon.",
    });
  };

  const formatMessageTime = (date: Date) => {
    const now = new Date();
    const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60);

    if (diffInHours < 24) {
      return date.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
    } else {
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });
    }
  };

  const filteredConversations = conversations.filter(conv =>
    conv.userName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-lg font-semibold">Messages</h1>
          <div className="w-10" />
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Conversations List */}
        <div
          className={`${
            selectedUserId ? "hidden lg:block" : "block"
          } w-full lg:w-96 border-r bg-background/50`}
        >
          {/* Search */}
          <div className="p-4 border-b">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search conversations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Conversations */}
          <ScrollArea className="h-[calc(100vh-140px)]">
            {filteredConversations.map((conv) => (
              <div
                key={conv.id}
                onClick={() => navigate(`/chat?userId=${conv.userId}`)}
                className={`p-4 border-b cursor-pointer transition-colors hover:bg-muted/50 ${
                  selectedUserId === conv.userId ? "bg-muted" : ""
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="relative">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={conv.userAvatar} alt={conv.userName} />
                      <AvatarFallback>{conv.userName[0]}</AvatarFallback>
                    </Avatar>
                    {conv.online && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background" />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-sm truncate">{conv.userName}</h3>
                      <span className="text-xs text-muted-foreground">
                        {formatMessageTime(conv.lastMessageTime)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-muted-foreground truncate">
                        {conv.typing ? (
                          <span className="italic text-primary">typing...</span>
                        ) : (
                          conv.lastMessage
                        )}
                      </p>
                      {conv.unreadCount > 0 && (
                        <Badge className="ml-2 h-5 w-5 p-0 flex items-center justify-center rounded-full bg-primary">
                          {conv.unreadCount}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </ScrollArea>
        </div>

        {/* Chat Area */}
        {selectedUserId && selectedConversation ? (
          <div className="flex-1 flex flex-col">
            {/* Chat Header */}
            <div className="p-4 border-b bg-background/95 backdrop-blur">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="lg:hidden"
                    onClick={() => navigate("/chat")}
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <Avatar className="h-10 w-10">
                    <AvatarImage
                      src={selectedConversation.userAvatar}
                      alt={selectedConversation.userName}
                    />
                    <AvatarFallback>{selectedConversation.userName[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{selectedConversation.userName}</h3>
                    <p className="text-xs text-muted-foreground">
                      {selectedConversation.online ? "Online" : "Offline"}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon">
                    <Phone className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Video className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Messages */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => {
                  const isCurrentUser = message.senderId === "current";
                  return (
                    <div
                      key={message.id}
                      className={`flex ${isCurrentUser ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[70%] rounded-lg p-3 ${
                          isCurrentUser
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted"
                        }`}
                      >
                        {message.imageUrl && (
                          <img
                            src={message.imageUrl}
                            alt="Shared"
                            className="rounded-lg mb-2 max-w-full"
                          />
                        )}
                        <p className="text-sm break-words">{message.text}</p>
                        <div
                          className={`flex items-center justify-end gap-1 mt-1 text-xs ${
                            isCurrentUser
                              ? "text-primary-foreground/70"
                              : "text-muted-foreground"
                          }`}
                        >
                          <span>{formatMessageTime(message.timestamp)}</span>
                          {isCurrentUser && (
                            <>
                              {message.status === "sent" && <Check className="h-3 w-3" />}
                              {message.status === "delivered" && <CheckCheck className="h-3 w-3" />}
                              {message.status === "read" && (
                                <CheckCheck className="h-3 w-3 text-blue-500" />
                              )}
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>

            {/* Message Input */}
            <div className="p-4 border-t bg-background/95 backdrop-blur">
              <div className="flex items-end gap-2">
                <Button variant="ghost" size="icon" onClick={handleImageUpload}>
                  <ImageIcon className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Smile className="h-5 w-5" />
                </Button>
                <div className="flex-1">
                  <Input
                    placeholder="Type a message..."
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    className="resize-none"
                  />
                </div>
                <Button onClick={handleSendMessage} disabled={!messageText.trim()}>
                  <Send className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="hidden lg:flex flex-1 items-center justify-center bg-muted/20">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-romantic flex items-center justify-center">
                <Send className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Select a conversation</h3>
              <p className="text-muted-foreground">
                Choose a conversation from the list to start messaging
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;
