
import React, { useEffect, useRef } from 'react';
import { ChatMessage, Sender } from '../types';
import { BotIcon } from './icons/BotIcon';
import { UserIcon } from './icons/UserIcon';

interface ChatWindowProps {
  chatHistory: ChatMessage[];
  isLoading: boolean;
}

const TypingIndicator: React.FC = () => (
    <div className="flex items-center space-x-1">
        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
    </div>
);

const ChatBubble: React.FC<{ message: ChatMessage }> = ({ message }) => {
    const isBot = message.sender === Sender.Bot;
    const bubbleClasses = isBot
        ? 'bg-slate-800 text-slate-300'
        : 'bg-cyan-600 text-white';
    const alignmentClasses = isBot ? 'justify-start' : 'justify-end';

    const Icon = isBot ? BotIcon : UserIcon;

    return (
        <div className={`flex items-end gap-2 my-4 ${alignmentClasses}`}>
            {isBot && <div className="flex-shrink-0"><Icon /></div>}
            <div className={`max-w-md lg:max-w-2xl px-4 py-3 rounded-lg ${bubbleClasses}`}>
                <p className="whitespace-pre-wrap">{message.text}</p>
            </div>
            {!isBot && <div className="flex-shrink-0"><Icon /></div>}
        </div>
    );
};


export const ChatWindow: React.FC<ChatWindowProps> = ({ chatHistory, isLoading }) => {
    const endOfMessagesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [chatHistory]);

    return (
        <div className="h-full">
            {chatHistory.map((msg) => (
                <ChatBubble key={msg.id} message={msg} />
            ))}
            {isLoading && chatHistory[chatHistory.length - 1]?.sender === Sender.User && (
                <div className="flex items-end gap-2 my-4 justify-start">
                    <BotIcon />
                    <div className="px-4 py-3 rounded-lg bg-slate-800">
                        <TypingIndicator />
                    </div>
                </div>
            )}
            <div ref={endOfMessagesRef} />
        </div>
    );
};
