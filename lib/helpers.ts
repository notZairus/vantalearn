import bcrypt from "bcrypt";

export async function compareHashedPassword(
  plainText: string,
  hashedText: string
) {
  const result = await bcrypt.compare(plainText, hashedText);

  return result;
}
