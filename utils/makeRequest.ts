import config from "./config";
import {getAccessToken} from "@/utils/cookies";

interface IRequestOptions {
	url: string;
	headers?: HeadersInit;
	method?: string;
	body?: any;
	cache?: RequestCache
}

export const makeRequest = async <T = any>({
	url,
	headers,
	method = "GET",
	body,
	cache = "default"
                                  }: IRequestOptions): Promise<T> => {
	try {
		const {apiUrl} = config;
		const correctHeaders = getHeaders(headers);
		const correctBody = getBody(body);

		const res = await fetch(`${apiUrl}${url}`, {
			headers: correctHeaders,
			method,
			body: correctBody,
			cache
		});
		return Promise.resolve(res.json());
	} catch(err) {
		console.error(err);
		return Promise.reject(err);
	}
}

const getHeaders = (headers: HeadersInit = {} as HeadersInit) => {
	const accessToken = getAccessToken();
	console.log({accessToken});
	const defaultHeaders: HeadersInit = {
		'Content-Type': "application/json",
	}

	if (accessToken) {
		defaultHeaders["Authorization"] = `Bearer ${accessToken}`;
	}

	return {
		...defaultHeaders,
		...headers
	}
}

const getBody = (body?: BodyInit) => {
	if(body) {
		return JSON.stringify(body);
	}
}
