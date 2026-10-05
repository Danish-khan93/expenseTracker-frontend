export interface ApiResponse<T> {
  status: "success";
  code: number;
  data: T;
  message: string;
}


export interface ErrorType {
  code: number;
  status: string;
  message: string;
  error: unknown[];
}