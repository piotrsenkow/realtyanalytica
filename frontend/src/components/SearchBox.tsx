import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

interface AddressSuggestion {
  full_address: string;
  ra_pid: number;
  "@timestamp": string;
  "@version": string;
}

const SearchBox = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<AddressSuggestion[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const delayDebounce = setTimeout(async () => {
      if (query.trim().length < 3) {
        setSuggestions([]);
        return;
      }

      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:3001/search`, {
          params: { full_address: query }
        });
        setSuggestions(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      setLoading(false);
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [query]);

  const handleSearchIconClick = () => {
    if (suggestions.length > 0) {
      console.log(suggestions[0].full_address);
    }
  };

  const handleSuggestionClick = (address: string, ra_pid: number) => {
    setQuery(address);
    setSuggestions([]);
    console.log('Selected RA_PID:', ra_pid);
  };

  return (
    <div className="flex flex-col items-center justify-center rounded">
      <div className="flex border-2 border-gray-300 rounded">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-96 pl-2 pr-3 py-1 rounded-l text-black"
          placeholder="Search..."
        />
        <button 
          className="bg-gray-400 p-2 rounded-r" 
          onClick={handleSearchIconClick}
        >
          <FontAwesomeIcon icon={faSearch} className="text-black w-4 h-4" />
        </button>
      </div>
      {loading && <div>Loading...</div>}
      <ul className="w-full bg-white text-left border border-gray-300 rounded text-black">
        {suggestions.map((item, index) => (
          <li key={index} className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleSuggestionClick(item.full_address, item.ra_pid)}>
            {item.full_address}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBox;
