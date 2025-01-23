import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageCircle, Send, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  text: string;
  isUser: boolean;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hello! How can I help you today?", isUser: false },
  ]);
  const [input, setInput] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage = { text: input, isUser: true };
    setMessages((prev) => [...prev, userMessage]);

    // Simulate bot response (you can replace this with actual API calls later)
    setTimeout(() => {
      const botMessage = {
        text: "Thank you for your message. Our team will get back to you soon!",
        isUser: false,
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);

    setInput("");
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="mb-4"
          >
            <Card className="w-[320px] h-[400px] backdrop-blur-lg bg-black/80 border-gray-800 flex flex-col">
              <div className="p-4 border-b border-gray-800 flex justify-between items-center">
                <h3 className="font-semibold text-white">Chat Support</h3>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      message.isUser ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        message.isUser
                          ? "bg-primary text-white"
                          : "bg-gray-800 text-gray-100"
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
              </div>
              <form onSubmit={handleSend} className="p-4 border-t border-gray-800">
                <div className="flex gap-2">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type a message..."
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                  <Button type="submit" size="icon">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </form>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        onClick={() => setIsOpen(!isOpen)}
        size="icon"
        className="rounded-full h-12 w-12 shadow-lg"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default ChatBot;