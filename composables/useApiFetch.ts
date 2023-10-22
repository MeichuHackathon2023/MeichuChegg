import type { UseFetchOptions } from "nuxt/app";

export function useApiFetch<T>(
  path: string | (() => string),
  options: UseFetchOptions<T> = {}
) {
  let headers: any = {};

  const auth = useAuthStore();

  let token;
  if (process.client) {
    token = localStorage.getItem("token");
  }
  console.log("useApiFetch", token);

  if (process.server) {
    headers = {
      ...headers,
    };
  }
  console.log("before useFetch", "http://192.168.149.213:8080" + path);
  return useFetch("http://192.168.149.213:8080" + path, {
    watch: false,
    ...options,

    headers: {
      Authorization: "Bearer " + token,
      ...headers,
      ...options?.headers,
    },
  });
}
