import React, { useState } from 'react';
import './LinkList.css';

function LinkList({ links }) {
  const [filter, setFilter] = useState('');

  const filteredLinks = links.filter((link) =>
    link.text.toLowerCase().includes(filter.toLowerCase())
  );

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search links..."
        value={filter}
        onChange={handleFilterChange}
      />
      <ul>
        {filteredLinks.map((link, index) => (
          <li key={index}>
            <a href={link.href}>{link.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LinkList;
