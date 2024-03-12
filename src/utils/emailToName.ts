export const emailToName = (email: string) => {
  return email.split("@").at(0)
}
