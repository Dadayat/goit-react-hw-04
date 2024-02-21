import axios from 'axios';

const KEY = 'Client-ID XCgPQ-DEdC3wdPJIqkCX1bkErvQi6PB0T-PjiQbl_yY';
axios.defaults.baseURL = 'https://api.unsplash.com';
axios.defaults.headers.common['Authorization'] = KEY;
axios.defaults.params = {
  per_page: 20,
};

export const getPhotos = async (query, page) => {
  const { data } = await axios.get(
    `/search/photos/?query=${query}&page=${page}`
  );

  return data;
};
