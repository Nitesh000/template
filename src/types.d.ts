export type contactType = {
  id: string;
  firstName: string;
  lastName: string;
  status: boolean;
};

export type MyObjectType = {
  [key: string]: any;
};

export type MyObjectType2 = {
  location: [number, number];
  message: [string, string, number, number];
};
