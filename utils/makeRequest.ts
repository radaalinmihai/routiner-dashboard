import getConfig from "next/config";
import config from "./config";

interface IRequestOptions {
	url: string;
	method?: string;
	body?: any;
	cache?: RequestCache
}

export const makeRequest = async ({
	url,
	method = "GET",
	body,
	cache = "default"
                                  }: IRequestOptions) => {
	try {
		const {apiUrl} = config;
		const correctBody = getBody(body);

		const res = await fetch(`${apiUrl}${url}`, {
			method,
			body: correctBody,
			cache
		});
		return res.json();
	} catch(err) {
		console.error(err);
		return err;
	}
}

const getBody = (body?: BodyInit) => {
	if(body) {
		return JSON.stringify(body);
	}
}
