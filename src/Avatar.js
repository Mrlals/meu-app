import React from 'react';

export default function Avatar({ person, size = 100 }) {
  return (
    <img
      src={`https://i.imgur.com/${person.imageId}.jpg`}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}
