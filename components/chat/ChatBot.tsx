'use client';

import { useChat } from '@ai-sdk/react';
import { useState, useEffect, useRef } from 'react';

export default function ChatBot() {
    const [isOpen, setIsOpen] = useState(false);
    const { messages, sendMessage, stop, status, setMessages, error } = useChat();
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isLoading]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        setIsLoading(true);
        try {
            await sendMessage({ role: 'user', content: input } as any);
            setInput('');
        } catch (err) {
            console.error('Chat error:', err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
            {/* Chat Window */}
            {isOpen && (
                <div className="mb-4 w-80 sm:w-96 h-[500px] bg-white border border-gray-200 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-10 duration-300 ease-out">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 text-white font-semibold flex justify-between items-center shadow-sm">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            <span>Support FDW 🤖</span>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="hover:bg-white/20 rounded-full p-1 transition-all duration-200 active:scale-90"
                        >
                            ✕
                        </button>
                    </div>

                    {/* Messages */}
                    <div
                        ref={scrollRef}
                        className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 scroll-smooth"
                    >
                        {messages.length === 0 && (
                            <div className="flex flex-col items-center justify-center h-full text-center space-y-3 animate-in fade-in zoom-in-95 duration-500">
                                <div className="text-4xl mb-2">👋</div>
                                <div className="text-gray-500 text-sm px-6">
                                    Bonjour ! Comment puis-je vous aider avec nos formations aujourd'hui ?
                                </div>
                            </div>
                        )}
                        {messages.map((m, idx) => (
                            <div
                                key={m.id || idx}
                                className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} animate-in slide-in-from-bottom-2 fade-in duration-300`}
                            >
                                <div className={`max-w-[85%] p-3 rounded-2xl text-sm shadow-sm transition-all ${
                                    m.role === 'user'
                                        ? 'bg-blue-600 text-white rounded-tr-none'
                                        : 'bg-white border border-gray-200 text-gray-800 rounded-tl-none'
                                }`}>
                                    {(m as any).content}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex justify-start animate-in fade-in duration-300">
                                <div className="bg-white border border-gray-200 p-3 rounded-2xl rounded-tl-none shadow-sm text-sm text-gray-500 italic flex items-center gap-2">
                                    <div className="flex gap-1">
                                        <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                        <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                        <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce"></span>
                                    </div>
                                    L'assistant réfléchit...
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Input */}
                    <form
                        onSubmit={handleSubmit}
                        className="p-4 border-t border-gray-100 bg-white flex gap-2"
                    >
                        <input
                            value={input}
                            onChange={handleInputChange}
                            placeholder="Posez votre question..."
                            className="flex-1 p-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-black"
                        />
                        <button
                            type="submit"
                            disabled={isLoading || !input.trim()}
                            className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-blue-700 disabled:opacity-50 transition-all duration-200 active:scale-95 shadow-sm"
                        >
                            Envoyer
                        </button>
                    </form>
                </div>
            )}

            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-14 h-14 rounded-full shadow-2xl flex items-center justify-center text-2xl transition-all duration-300 active:scale-90 ${
                    isOpen
                        ? 'bg-gray-100 text-gray-600 rotate-90'
                        : 'bg-blue-600 hover:bg-blue-700 text-white hover:scale-110'
                }`}
            >
                {isOpen ? '✕' : '💬'}
            </button>
        </div>
    );
}
