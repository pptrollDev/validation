export interface ApiError {
  code: number;
  type?: string;
  message: string;
}

export interface EasysignCompleteParams {
  name: string;
  phoneNumber: string;
  regNumber: string;
}

export interface EasysignRequestResponse {
  startedAt: Date,
  expiredAt: Date
}
