type StringOrNull = string | null;

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
  display_name: StringOrNull;
  login: string;
  email: string;
  phone: string;
  avatar: StringOrNull;
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

export type TypeUserAvatarRequest = {
  avatar: FileList;
};

export type TypeUserAvatarResponse = {
  id: number;
  login: string;
  first_name: string;
  second_name: string;
  email: string;
  phone: string;
  display_name: StringOrNull;
  avatar: StringOrNull;
  status: StringOrNull;
};

export type TypeUserLogin = {
  login: string;
};

export type TypeChatUsersRequest = {
  users: number[];
  chatId: number;
};

// * Chat

export type TypeChatRequest = {
  title: string;
};
export type TypeChatResponse = TypeGoodResponse;

export type TypeChatsResponse = {
  id: number;
  title: string;
  avatar: string;
}[];

export type TypeRole = 'admin' | 'regular' | undefined;

export type TypeChatUsersResponse = {
  id: number;
  first_name: string;
  second_name: string;
  display_name: StringOrNull;
  login: string;
  email: string;
  phone: string;
  avatar: StringOrNull;
  role: TypeRole;
}[];

export type TypeUserId = { id: number };

export type TypeMessage = {
  id: number;
  userId?: number; // проблемы на бэке
  user_id: number;
  chat_id: number;
  content: string;
  time: string;
  type?: string;
};
