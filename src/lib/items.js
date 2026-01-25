import itemsData from '@/data/items.json';

// Global in-memory store (simulation for this assignment)
// In a real app, this would be a database connection.
let items = [...itemsData];

export const getAllItems = () => {
  return items;
};

export const addItem = (item) => {
  const newItem = {
    id: items.length > 0 ? Math.max(...items.map((i) => i.id)) + 1 : 1,
    ...item,
    price: parseFloat(item.price),
  };
  items.push(newItem);
  return newItem;
};

export const getItemById = (id) => {
    return items.find(item => item.id === parseInt(id));
}
