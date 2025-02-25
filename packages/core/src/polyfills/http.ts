import { NetworkManager } from '../network/manager';
import { fetch } from '@zenfs/core';

export class HttpPolyfill {
    constructor(private networkManager: NetworkManager) {}

    get(url: string, options: any = {}): Promise<any> {
        return fetch(url, { ...options, method: 'GET' });
    }

    post(url: string, data: any, options: any = {}): Promise<any> {
        return fetch(url, {
            ...options,
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                ...options.headers
            }
        });
    }

    request(options: any): Promise<any> {
        const url = options.url || options.uri;
        return fetch(url, {
            method: options.method || 'GET',
            headers: options.headers,
            body: options.body
        });
    }
}

export const createHttpPolyfill = (networkManager: NetworkManager) => {
    const http = new HttpPolyfill(networkManager);
    return http;
};