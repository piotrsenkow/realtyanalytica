import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useQuery } from '@apollo/client';
import { GET_LISTING_BY_ID } from '../graphql/queries';


interface AddressSuggestion {
  full_address: string;
  ra_pid: number;
  "@timestamp": string;
  "@version": string;
}

const SearchBox = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<AddressSuggestion[]>([]);
  const [isLoading, setLoading] = useState(false);
  const router = useRouter(); // Initialize the router

  
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

  const handleAddressClick = async (address: string, raPid: number) => {
    try {
      const { data } = await refetch({ raPid });
      console.log(data);
      const urlAddress = encodeURIComponent(address.replace(/\s+/g, '-'));
      router.push(`/propertydetails/${urlAddress}/${raPid}_rapid`)
      setQuery(address);
      setSuggestions([]);
      // Process and use the data as needed
    } catch (error) {
      console.error('Error fetching listing:', error);
    }
  };

  const { loading, error, data, refetch } = useQuery(GET_LISTING_BY_ID, {
    variables: { raPid: 0 },
    skip: true, // Skip the query on initial render
  });

  return (
    <div className="flex flex-col items-center justify-center rounded">
      <div className="flex border-2 border-gray-300 rounded">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-96 pl-2 pr-3 py-1 rounded-l text-black"
          placeholder="Search for an address in Chicagoland..."
        />
        <button 
          className="bg-white hover:bg-gray-300 p-2 rounded-r" 
          onClick={handleSearchIconClick}
        >
          <FontAwesomeIcon icon={faSearch} className="text-black w-4 h-4" />
        </button>
      </div>
      {isLoading && <div>Loading...</div>}
      <ul className="w-full bg-white text-left border border-gray-300 rounded text-black">
        {suggestions.map((item, index) => (
          <li key={index} className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleAddressClick(item.full_address, item.ra_pid)}>
            {item.full_address}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBox;
