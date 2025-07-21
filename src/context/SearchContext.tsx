import React, { createContext, useState, useContext } from "react";
import type { Dispatch, SetStateAction } from "react"; // Type-only import
// Define the type for the context value
type SearchUpdateType = Dispatch<SetStateAction<string>>;

// Create context with explicit type and undefined as default (better for TypeScript)
const SearchTerm = createContext<string>("");
const SearchUpdate = createContext<SearchUpdateType>(() => {
  // Default empty function that does nothing
  // This will be overridden by the Provider's value
});

export function useSearchTerm() {
  return useContext(SearchTerm);
}

export function useSearchUpdate() {
  return useContext(SearchUpdate);
}

// Type the children prop properly
interface SearchProviderProps {
  children: React.ReactNode;
}

export function SearchProvider({ children }: SearchProviderProps) {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <SearchUpdate.Provider value={setSearchTerm}>
      <SearchTerm.Provider value={searchTerm}>{children}</SearchTerm.Provider>
    </SearchUpdate.Provider>
  );
}
