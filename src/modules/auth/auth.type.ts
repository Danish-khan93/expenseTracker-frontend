type UserDetailType = {
  fullName: string;
  email: string;
};
export type AuthInitialValue = {
  loading: boolean;
  error: unknown;
  userDetails: UserDetailType | null;
};

export interface userPayload {
  fullName: string;
  email: string;
  password: string;
}

export interface AuthResponseType {
  fullName: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  id: number;
}


