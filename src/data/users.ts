export interface AuthUser {
  username: string;
  pin: string;
  isAdmin: boolean;
  isPilot: boolean;
  isJoker: boolean;
}

export const authorizedUsers: AuthUser[] = [
  { username: 'evojota', pin: '0481', isAdmin: true, isPilot: true, isJoker: false },
  { username: 'rev', pin: '4691', isAdmin: false, isPilot: false, isJoker: true },
];

export function authenticateUser(username: string, pin: string): AuthUser | null {
  const found = authorizedUsers.find(
    u => u.username === username.trim().toLowerCase() && u.pin === pin
  );
  return found ?? null;
}
