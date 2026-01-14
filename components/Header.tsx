import React from 'react';
import { ImageIcon } from './icons/ImageIcon';

interface HeaderProps {
  onGenerateImage: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onGenerateImage }) => {
  return (
    <header className="flex items-center justify-between p-4 border-b border-slate-700 bg-slate-800/50 backdrop-blur-sm sticky top-0 z-10">
      <div className="text-xl font-bold tracking-wider text-cyan-400">
        Kriol Dikshineri
      </div>
      <button
        onClick={onGenerateImage}
        className="p-2 rounded-full hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 transition-colors duration-300"
        aria-label="Generate random word image"
        title="Generate random word image"
      >
        <ImageIcon />
      </button>
    </header>
  );
};
