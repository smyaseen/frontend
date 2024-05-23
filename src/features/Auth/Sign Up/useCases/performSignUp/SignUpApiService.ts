const apiUrl = import.meta.env.VITE_API_URL;

export interface SignUpResponse {
  email: string;
  token: string;
}

interface AdapterOptions {
  request?: typeof window.fetch;
}

export function createSignUpApiAdapter(
  { email, fullName, password }: { email: string; fullName: string; password: string },
  { request = window.fetch }: AdapterOptions = {}
): () => Promise<SignUpResponse> {
  return async (): Promise<SignUpResponse> => {
    const response = await request(`${apiUrl}/auth`, {
      body: JSON.stringify({ email, fullName, password }),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
    });
    const result = (await response.json()) as SignUpResponse;

    if (response.ok) {
      return result;
    }

    throw result;
  };
}
