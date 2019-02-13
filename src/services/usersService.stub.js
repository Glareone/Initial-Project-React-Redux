export default {
  getAll() {
    return new Promise(resolve => {
      resolve([
        { id: 1, title: 'user1' },
        { id: 2, title: 'user2' },
        { id: 3, title: 'user3' }
      ]);
    });
  }
};
