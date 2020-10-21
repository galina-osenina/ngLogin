export function role(role: string) {
  return function(target) {
    target.role = role;
  }
}
