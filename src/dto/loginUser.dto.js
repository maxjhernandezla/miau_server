export default class LoginUserDto
{
    constructor(user)
    {
        this.role = user.role
        this.email = user.email
        this._id = user._id
    }
}