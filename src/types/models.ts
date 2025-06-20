export type User = {
  id: string;
  name: string;
  partnerId?: string;
  inviteCode?: string;
  partnerName?: string;
};

export type AuthContextType = {
  user: User | null;
  signUp: (name: string) => void;
  linkPartner: (code: string) => void;
};
