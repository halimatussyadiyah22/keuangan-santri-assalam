import {AccountDto} from "./account-dto";

export interface AuthenticationResponse{
  token? : string;
  customerDTO: AccountDto;
}
