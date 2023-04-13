import {getCookie, setCookie} from "cookies-next";
import type {OptionsType} from "cookies-next/lib/types";

export enum Tokens {
	AccessToken = "access_token",
	RefreshToken = "refresh_token",
}

const cookieOptions = (): OptionsType => ({
		domain: `.${window.location.hostname}`,
		path: "/",
	});

export const setAccessToken = (value: string) => {
	console.log(cookieOptions());
	setCookie(Tokens.AccessToken, value, cookieOptions());
}

export const setRefreshToken = (token: string) => {
	setCookie(Tokens.RefreshToken, token, cookieOptions());
}

export const getAccessToken = () => getCookie(Tokens.AccessToken, cookieOptions());
export const getRefreshToken = () => getCookie(Tokens.RefreshToken, cookieOptions());
