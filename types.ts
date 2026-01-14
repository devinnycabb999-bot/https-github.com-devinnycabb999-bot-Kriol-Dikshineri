// FIX: Added missing type definitions to resolve compilation errors.
// These types are used by components that are part of the application but were missing their definitions.

/**
 * Represents the sender of a chat message, which can be either the user or the bot.
 */
export enum Sender {
    Bot = 'BOT',
    User = 'USER',
}

/**
 * Represents a single message within the chat history.
 */
export interface ChatMessage {
    id: string;
    text: string;
    sender: Sender;
}

/**
 * Represents a word and its definition in the dictionary.
 */
export interface DictionaryEntry {
    term: string;
    definition: string;
}
