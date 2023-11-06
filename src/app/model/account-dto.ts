export interface AccountDto {
  id? : number;
  name? : string;
  email? : string;
  gender? : 'MALE' | 'FEMALE';
  age?: number;
  roles?: string[];
  username? : string;
}
