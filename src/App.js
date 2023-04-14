import React, { useState, useEffect } from 'react';
import LinkList from './LinkList';

function App() {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const urls = [
        'https://scavix.github.io/cs_resources.html',
        'https://scavix.github.io/math_resources.html',
        'https://scavix.github.io/cs_utilities.html',
        'https://scavix.github.io/science_resources.html'
      ];
      const responses = await Promise.all(urls.map((url) => fetch(url)));
      const htmls = await Promise.all(responses.map((response) => response.text()));
      const parser = new DOMParser();
      const docs = htmls.map((html) => parser.parseFromString(html, 'text/html'));
      const linksArray = docs.map((doc) =>
        Array.from(doc.querySelectorAll('a')).map((a) => ({
          text: a.textContent.trim(),
          href: a.href,
        }))
      );
      const allLinks = linksArray.flat();
      setLinks(allLinks);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Links</h1>
      <LinkList links={links} />
    </div>
  );
}

export default App;
