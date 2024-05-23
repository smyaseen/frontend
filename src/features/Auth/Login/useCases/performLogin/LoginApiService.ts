const apiUrl = import.meta.env.VITE_API_URL;

export interface LoginResponse {
  email: string;
  token: string;
}

interface AdapterOptions {
  request?: typeof window.fetch;
}

export function createLoginApiAdapter(
  email: string,
  password: string,
  { request = window.fetch }: AdapterOptions = {}
): () => Promise<LoginResponse> {
  return async (): Promise<LoginResponse> => {
    const response = await request(`${apiUrl}/auth`, {
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
    });
    const result = (await response.json()) as LoginResponse;

    if (response.ok) {
      return result;
    }

    throw result;
  };
}
