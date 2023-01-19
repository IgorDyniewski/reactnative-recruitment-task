export interface DoctorAddressInterface {
  id: number;
  name: string;
  street: string;
  services: Array<doctorService> | null;
  slots?: Array<AddressesSlotInterface> | null;
}

export interface doctorService {
  id: number;
  name: string;
  price: number;
}

export interface AddressesSlotInterface {
  start: string;
  booked: boolean;
  link: string;
}

export interface DoctorBasicInfoInterface {
  id: number;
  fullName: string;
  isVerified: boolean;
  profilePictureUrl: string;
  profileUrl: string;
  ratingCount: number;
  stars: 0 | 1 | 2 | 3 | 4 | 5;
  badge: string;
  specializations: Array<string>;
  addresses: Array<DoctorAddressInterface>;
}
