import { auth } from "../firebase/firebase";

export const checkAdmin = async () => {
  const user = auth.currentUser;
  if (!user) return false;

  const token = await user.getIdTokenResult();
  return token.claims.role === "admin";
};
