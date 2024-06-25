export default class CatDto
{
    constructor(cat)
    {
        this.name = cat.name
        this.birthday = cat.birthday
        this.type = cat.type
        this.gender = cat.gender
        this.neutered = cat.neutered
        this.owner_id = cat.owner_id
    }
}