import { mockPeople } from './mockPeople';

export const mockRes = {
  count: 82,
  next: 'https://swapi.dev/api/people/?page=3',
  previous: 'https://swapi.dev/api/people/?page=1',
  results: [...mockPeople],
};
