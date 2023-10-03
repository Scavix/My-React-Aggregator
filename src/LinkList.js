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
      <div style={{ display: 'flex', alignItems: 'center' }}>
      <input
        type="text"
        placeholder="Search links..."
        value={filter}
        onChange={handleFilterChange}
        style={{ marginRight: '1%' }}
      />
        <span>Total Links: {links.length}</span>
        <span style={{ marginLeft: '10px' }}>Filtered Links: {filteredLinks.length}</span>
      </div>
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
