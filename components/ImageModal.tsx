import React, { useState } from 'react';
import { CopyIcon } from './icons/CopyIcon';
import { DownloadIcon } from './icons/DownloadIcon';

export interface GeneratedContent {
  imageUrl: string;
  kriol: string;
  meaning: string;
  kriolExample: string;
  englishExample: string;
}

interface ImageModalProps {
  isOpen: boolean;
  isLoading: boolean;
  content: GeneratedContent | null;
  error: string | null;
  onClose: () => void;
}

const LoadingSpinner: React.FC = () => (
    <div className="flex flex-col items-center justify-center text-center gap-4">
        <div className="w-12 h-12 border-4 border-stone-600 border-t-amber-400 rounded-full animate-spin"></div>
        <p className="text-stone-400">Generating a visual masterpiece... <br/>This can take a moment.</p>
    </div>
);

const ErrorDisplay: React.FC<{ message: string }> = ({ message }) => (
    <div className="text-center text-red-400 bg-red-900/50 p-4 rounded-lg">
        <p className="font-semibold">Oh no!</p>
        <p>{message}</p>
    </div>
);

export const ImageModal: React.FC<ImageModalProps> = ({ isOpen, isLoading, content, error, onClose }) => {
  const [copyButtonText, setCopyButtonText] = useState('Copy');

  const handleCopy = () => {
    if (!content) return;
    const textToCopy = `Kriol Word: ${content.kriol}\nEnglish Meaning: ${content.meaning}\n\nKriol Example: ${content.kriolExample}\nEnglish Translation: ${content.englishExample}`;
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopyButtonText('Copied!');
      setTimeout(() => setCopyButtonText('Copy'), 2000);
    });
  };

  const handleDownload = () => {
    if (!content) return;
    const link = document.createElement('a');
    link.href = content.imageUrl;
    link.download = `kriol-visual-word-${content.kriol.toLowerCase().replace(/ /g, '-')}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isOpen) return null;

  return (
    <div 
        className="fixed inset-0 bg-black/70 z-40 flex items-center justify-center p-4"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="image-modal-title"
    >
      <div 
        className="bg-stone-800 rounded-xl shadow-2xl w-full max-w-lg max-h-[90vh] flex flex-col overflow-hidden border border-stone-700"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 flex items-center justify-between border-b border-stone-700">
            <h2 id="image-modal-title" className="text-lg font-semibold text-amber-400">
                Visual Dictionary
            </h2>
            <button 
                onClick={onClose} 
                className="text-stone-400 hover:text-white text-2xl leading-none"
                aria-label="Close modal"
            >
                &times;
            </button>
        </div>
        
        <div className="p-6 flex-1 overflow-y-auto">
          {isLoading && <LoadingSpinner />}
          {error && <ErrorDisplay message={error} />}
          {content && (
            <div className="relative">
              <div className="bg-stone-900 rounded-lg overflow-hidden">
                <img src={content.imageUrl} alt={`Generated image for '${content.kriol}'`} className="w-full h-full object-contain" />
              </div>
              <button 
                  onClick={handleCopy}
                  className="absolute top-2 right-2 flex items-center gap-1.5 text-xs bg-stone-900/70 hover:bg-stone-700/90 text-stone-200 px-2 py-1.5 rounded-md transition-colors backdrop-blur-sm"
                  aria-label="Copy dictionary entry text"
                >
                    <CopyIcon/> {copyButtonText}
                </button>
            </div>
          )}
        </div>
         {content && (
            <div className="p-4 flex justify-end gap-3 border-t border-stone-700 bg-stone-900/50">
                <button 
                    onClick={handleDownload}
                    className="flex items-center gap-2 px-4 py-2 bg-amber-600 text-white text-sm font-semibold rounded-lg hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-stone-800 transition-colors"
                    aria-label="Download generated image"
                >
                    <DownloadIcon />
                    <span>Download Image</span>
                </button>
            </div>
        )}
      </div>
    </div>
  );
};