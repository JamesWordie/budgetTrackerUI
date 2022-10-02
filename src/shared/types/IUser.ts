export interface IUserRequest {
  firstname: string;
  surname: string;
  email: string;
  password: string;
}

export interface IUserResponse {
  user: Array<IUser>;
}

export interface IUser {
  _id: string;
  firstname: string;
  surname: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}
