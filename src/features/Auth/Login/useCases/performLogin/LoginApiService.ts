const apiUrl = import.meta.env.VITE_API_URL;

interface Tokens {
  accessToken: string;
  refreshToken: string;
}

interface User {
  name: string;
  role: string;
}

interface Data {
  tokens?: Tokens;
  user?: User;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  data?: Data;
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
    const response = await request(`${apiUrl}/auth/login`, {
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
