
type Restaurant = { id: number; name: string; category: string; rating: number; priceForOne: number; ecoMessage: string; maxSafety: boolean; image: string; route: string };

export const fetchRestaurants = async (): Promise<Restaurant[]> => {
  const res = await fetch("https://6a965dfdfa33b37f821b2c24.mockapi.io/api/v1/restaurants")
  return res.json();
};