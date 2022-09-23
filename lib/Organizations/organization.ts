export interface Organization {
  uuid: string;
  name: string;
  organization_types: string[];
  websites: {
    url: string;
  }[];
  ids: {
    id: string;
    id_type: string;
  }[];
  address: string;
  address_details: {
    zip: string;
    city: string;
    state: string;
    street: string;
    address_line_1: string | null;
    address_line_2: string | null;
  };
  latitude: number;
  longitude: number;
  phone_numbers: {
    phone: string;
    details: string;
  }[];
}
