export type UserDto = {
  id?: number;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  roles: any[];
};
