import { useMutation } from '@tanstack/react-query';
import fetchApi from '../api/ApiHelper';

type Mutation = {
    Api: string;
    Endpoint: string;
    method?: string;
};

export default function useMutationHelper({ Api, Endpoint, method = 'POST' }: Mutation) {
    return useMutation({
        mutationFn: (body: string) => fetchApi(`${Api}${Endpoint}`, method, body),
    });
}