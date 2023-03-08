export interface ErrorResponse {
  ok: boolean;
  msg: string;
}

export interface RegisterResponse {
  ok: boolean;
  newUser: UserResponse;
}

interface UserResponse {
  email: string;
  name: string;
  role: string;
  isActive: boolean;
  uid: string;
}

