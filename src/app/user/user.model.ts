export interface User {
  uid: string;
  email: string;
  photoURL: string;
  displayName: string;
  profile: {
    firstName: string;
    lastName: string;
    otherNames: string;
    country: string;
    dateOfBirth: Date;
    addressLine1: string;
    addressLine2: string;
    addressLine3: string;
    mobilePhone1: string;
  };

  logins: any[];
  payments: any[];
  events: any[];
}
