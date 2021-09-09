import { Gender, PersonTitle } from './enums';

export interface PaginationConfig {
  page: number;
  limit?: number;
}
export interface ApiList<T> {
  data: Array<T>;
  total: number;
  page: number;
  limit: number;
}

export interface UserPreview {
  id: string;
  title: PersonTitle;
  firstName: string;
  lastName: string;
  picture: string;
}

export interface UserFull extends UserPreview {
  gender: Gender;
  email: string;
  dateOfBirth: string; // ISO Date - value: 1/1/1900 - now
  registerDate: string;
  phone: string; // Any format
  picture: string;
  location: Location;
}

export interface Location {
  street: string;
  city: string;
  state: string;
  country: string;
  timezone: string; // Valid timezone value ex. +7:00, -1:00
}
