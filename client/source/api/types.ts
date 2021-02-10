type TypeId = { id: number };
type TypeFirstName = { first_name: string };
type TypeSecondName = { second_name: string };
type TypeLogin = { login: string };
type TypeEmail = { email: string };
type TypePassword = { password: string };
type TypePhone = { phone: string };

type TypeFullName = TypeFirstName & TypeSecondName;
type TypeUserData = TypeFullName & TypeLogin & TypeEmail & TypePhone;

export type TypeEmptyResponse = {};

export type TypeBadResponse = {
  reason: string;
};

export type TypeGoodResponse = {
  message: string;
};

export type TypeUser = TypeId &
  TypeUserData & {
    display_name: string;
    avatar: string;
  };

export type TypeSignInRequest = TypeLogin & TypePassword;
export type TypeSignInResponse = TypeEmptyResponse;

export type TypeSignUpRequest = TypeUserData & TypePassword;
export type TypeSignUpResponse = TypeId;
export type TypeSignUpForm = TypeSignUpRequest & { repeat_password: string };
