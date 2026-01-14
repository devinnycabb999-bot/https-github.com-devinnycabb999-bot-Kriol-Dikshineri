import React from 'react';
import { DictionaryEntry } from '../types';
import { BookIcon } from './icons/BookIcon';

interface DictionaryProps {
  learnedWords: DictionaryEntry[];
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const Dictionary: React.FC<DictionaryProps> = ({ learnedWords, isOpen, setIsOpen }) => {
  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/60 z-20 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      ></div>
      <aside className={`flex flex-col h-full bg-slate-800 border-r border-slate-700 transition-transform transform z-30 ${isOpen ? 'translate-x-0' : '-translate-x-full'} w-72 fixed sm:relative sm:translate-x-0 sm:w-80`}>
        <div className="flex items-center justify-between p-4 border-b border-slate-700">
            <div className="flex items-center gap-3">
                <BookIcon />
                <h2 className="text-lg font-semibold text-cyan-400">Dictionary</h2>
            </div>
            <button onClick={() => setIsOpen(false)} className="sm:hidden text-slate-400 hover:text-white">&times;</button>
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          {learnedWords.length > 0 ? (
            <ul className="space-y-3">
              {learnedWords.map((word, index) => (
                <li key={index} className="p-3 bg-slate-700/50 rounded-lg">
                  <p className="font-semibold text-slate-200">{word.term}</p>
                  <p className="text-sm text-slate-400">{word.definition}</p>
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-center text-slate-500 mt-8">
              <p>Your dictionary is empty.</p>
              <p className="text-sm mt-2">Discover new words through conversation.</p>
            </div>
          )}
        </div>
      </aside>
    </>
  );
};