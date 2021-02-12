// * Response
export type TypeEmptyResponse = {};
export type TypeBadResponse = {
  reason: string;
};
export type TypeGoodResponse = {
  message: string;
};

// * SignUp
export type TypeSignUpRequest = {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
};
export type TypeSignUpResponse = { id: number };
export type TypeSignUpForm = TypeSignUpRequest & { repeat_password: string };

// * Signin
export type TypeSignInRequest = {
  login: string;
  password: string;
};
export type TypeSignInResponse = TypeEmptyResponse;

// * User
export type TypeUserResponse = {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string | null;
  login: string;
  email: string;
  phone: string;
  avatar: string | null;
};

export type TypeUserPasswordRequest = {
  oldPassword: string;
  newPassword: string;
};
export type TypeUserPasswordResponse = TypeGoodResponse;

export type TypeUserProfileRequest = {
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
};

export type TypeUserProfileResponse = {
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
};

export type TypeUserLogin = {
  login: string;
};
