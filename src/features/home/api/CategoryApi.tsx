
type Category = { id: number; name: string; image: string };

export const fetchCategories = async (): Promise<Category[]> => {
  const res = await fetch("https://6a965dfdfa33b37f821b2c24.mockapi.io/api/v1/categories");
  return res.json();
};