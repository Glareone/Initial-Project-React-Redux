export default {
  getAll() {
    return new Promise(resolve => {
      resolve([
        { id: 1, title: 'item1' },
        { id: 2, title: 'item2' },
        { id: 3, title: 'item3' }
      ]);
    });
  }
};
