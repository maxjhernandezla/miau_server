export default class UserDto
{
    constructor(user)
    {
        this.role = user.role
        this.email = user.email
        this._id = user._id
        this.cats = user.cats
        this.name = user.name
        this.surname = user.surname
        this.address = user.address
        this.working_from = user.working_from
    }
}