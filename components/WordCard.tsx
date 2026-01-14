import React from 'react';
import { VisualDictionaryEntry } from '../services/dictionaryService';

interface WordCardProps {
    entry: VisualDictionaryEntry;
}

export const WordCard: React.FC<WordCardProps> = ({ entry }) => {
    return (
        <div className="bg-stone-800 border border-stone-700 rounded-lg shadow-lg p-6 space-y-4">
            <h3 className="text-3xl font-bold text-amber-400 font-serif">{entry.kriol}</h3>
            
            <div>
                <h4 className="font-semibold text-amber-500 font-serif text-lg">English Meaning</h4>
                <p className="text-stone-300">{entry.meaning}</p>
            </div>

            <div>
                <h4 className="font-semibold text-amber-500 font-serif text-lg">Example</h4>
                <blockquote className="border-l-4 border-stone-600 pl-4 mt-1">
                    <p className="italic text-stone-300">"{entry.kriolExample}"</p>
                    <p className="italic text-stone-400 text-sm mt-1">({entry.englishExample})</p>
                </blockquote>
            </div>
        </div>
    );
};
