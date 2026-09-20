export interface RequestUser {
  userId: number;
  email: string;
  role: string;
}

export interface AuthenticatedRequest extends Request {
  user: RequestUser;
}
