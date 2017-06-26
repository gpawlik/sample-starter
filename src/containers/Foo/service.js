export const fetchSample = id => {
  return fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(res => {
      return 'Hello from API';
    });
};
