import React from 'react';

const chemists = [
  { id: 1, name: 'Marie Curie', profession: 'chemist' },
  { id: 2, name: 'Albert Einstein', profession: 'physicist' },
  { id: 3, name: 'Dmitri Mendeleev', profession: 'chemist' },
];

export default function Chemists() {
  const chemistList = chemists
    .filter(person => person.profession === 'chemist')
    .map(person => <li key={person.id}>{person.name}</li>);

  return <ul>{chemistList}</ul>;
}
