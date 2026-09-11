import { useQuery } from '@tanstack/react-query';
import fetchApi from '../../../shared/components/api/ApiHelper'

const API1_BASE = process.env.EXPO_PUBLIC_BASE_URL;

const fetchRestaurants = () => fetchApi(`${API1_BASE}/restaurants`);

export const useRestaurants = () => {
    return useQuery({
        queryKey: ['restaurants'],
        queryFn: fetchRestaurants,
    });
};


