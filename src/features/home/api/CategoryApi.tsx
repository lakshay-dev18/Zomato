import { useQuery } from '@tanstack/react-query';
import fetchApi from '../../../shared/components/api/ApiHelper'

const API1_BASE = process.env.EXPO_PUBLIC_BASE_URL;


const fetchCategories = (method:any) => fetchApi(`${API1_BASE}/categories`,
    method='Get',
)

export const useCategories = () => {
    return useQuery({
        queryKey: ['categories'],
        queryFn: fetchCategories,
    });
};