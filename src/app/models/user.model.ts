export class User {
  constructor(
    public email: string,
    public id: string,
    private _token: string,
    private _expiredDate: Date
  ) {}

  get token(){
    if(!this._expiredDate || this._expiredDate.getTime() > new Date().getTime()){
        return null
    }
    return this._token
  }
}
