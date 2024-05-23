// const apiUrl = import.meta.env.VITE_API_URL;

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

export interface SignUpResponse {
  success: boolean;
  message: string;
  data?: Data;
}

interface AdapterOptions {
  request?: typeof window.fetch;
}

export function createSignUpApiAdapter(
  { email, name, password }: { email: string; name: string; password: string },
  { request = window.fetch }: AdapterOptions = {}
): () => Promise<SignUpResponse> {
  return async (): Promise<SignUpResponse> => {
    const response = await request(`http://localhost:3000/auth/register`, {
      body: JSON.stringify({ email, name, password }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
    const result = (await response.json()) as SignUpResponse;

    if (response.ok) {
      return result;
    }

    throw result;
  };
}
