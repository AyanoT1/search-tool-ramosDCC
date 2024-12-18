import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Header() {
  return (
    <nav className="absolute top-0 p-4 w-full flex items-center justify-between border-b">
      <h2 className="text-4xl font-semibold">RamosCC</h2>
      <a 
        href="https://github.com/AyanoT1/search-tool-ramosDCC" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-4xl mr-2 text-black dark:text-white"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </nav>
  );
}
