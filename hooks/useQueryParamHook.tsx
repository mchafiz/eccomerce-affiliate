"use client";

import { useSearchParams } from "next/navigation";

// Define the return type for the hook
interface UseQueryParams {
  getQueryParam: (key: string) => string | null;
  addQueryParam: (
    paramOrParams: string | Record<string, string>,
    value?: string
  ) => void;
  deleteQueryParam: (key: string | string[]) => void;
}

export const useQueryParamsHook = (): UseQueryParams => {
  const searchParams = useSearchParams();

  // Get a query parameter by key
  const getQueryParam = (key: string): string | null => {
    return searchParams.get(key);
  };

  // Add or update query parameters (single or multiple)
  const addQueryParam = (
    paramOrParams: string | Record<string, string>,
    value?: string
  ): void => {
    const params = new URLSearchParams(searchParams.toString());

    if (typeof paramOrParams === "string" && value !== undefined) {
      // Single key-value pair
      params.set(paramOrParams, value);
    } else if (typeof paramOrParams === "object") {
      // Multiple key-value pairs
      Object.entries(paramOrParams).forEach(([key, val]) => {
        params.set(key, val);
      });
    }

    // Update the URL with the new query parameters
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState(null, "", newUrl);
  };

  // Delete a query parameter (single key or multiple keys)
  const deleteQueryParam = (keyOrKeys: string | string[]): void => {
    const params = new URLSearchParams(searchParams.toString());

    if (typeof keyOrKeys === "string") {
      // Delete a single key
      params.delete(keyOrKeys);
    } else {
      // Delete multiple keys
      keyOrKeys.forEach((key) => params.delete(key));
    }

    // Update the URL without the specified query parameters
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState(null, "", newUrl);
  };

  return { getQueryParam, addQueryParam, deleteQueryParam };
};
