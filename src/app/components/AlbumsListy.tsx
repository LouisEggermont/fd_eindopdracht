// import React, { useEffect, useState } from 'react';
// import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
// import { CloudinaryContext, Image } from 'cloudinary-react'; // Import for images

let cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true
});

async function getFolder(subdirectory: string) {
  var result = await cloudinary.api.sub_folders(subdirectory);
  return result;
}

let AlbumsList = async ({ directory }: { directory: string }) => {
  const [selectedType, setSelectedType] = useState('digital'); // Initial selection
  const [folders, setFolders] = useState([]);

  useEffect(() => {
    const fetchFolders = async () => {
      const filteredFolders = await getFolder(
        `${directory}/${selectedType}` // Add selected type to path
      );
      setFolders(filteredFolders);
    };

    fetchFolders();
  }, [selectedType, directory]); // Update on selection and directory change

  const handleTypeChange = (event : any) => {
    setSelectedType(event.target.value);
  };

  return (
    <div>
      <h1>Select Type</h1>
      <select value={selectedType} onChange={handleTypeChange}>
        <option value="digital">Digital</option>
        <option value="analog">Analog</option>
      </select>

      <h1>Albums</h1>
      {folders.length > 0 ? (
        <ul>
          {folders.map((folder: any) => (
            <li key={folder.path}>
              <Link href={`/photos/albums/${directory}/${folder.path}`}>
                {folder.name}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No folders found.</p>
      )}
    </div>
  );
};

export default AlbumsList;