export interface AccountRegistrationRequest {
  id? : number;
  name? : string;
  email? : string;
  password? : string;
  level? : 'ADMIN' | 'WALI_SANTRI' | 'PEMANTAU'
}
