export interface ITokenResponse {
  accessToken: string;
  refreshToken: string;
}

export interface ISessionResponse {
  sessions: Array<ISession>;
}

export interface ISession {
  valid: string;
  _id: string;
  user: string;
  userAgent: string;
  createdAt: Date;
  updatedAt: Date;
}
