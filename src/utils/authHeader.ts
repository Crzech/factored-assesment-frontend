export const authHeader = (token: string | undefined) => ({
  Authorization: `Bearer ${token}`,
});
