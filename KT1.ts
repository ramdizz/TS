class User{
    private static count: number = 0;
    private _name: string
    private _login: string 
    private _password: string
    private _grade: number 
    constructor(name: string, login: string,
        password: string,
        grade: number ){
            this._name= name;
            this._login= login;
            this._password= password;
            this._grade= grade;
            User.count++
    }
    get name():string{
        return this._name;
    }
    set name(value:string){
        this._name = value;
    }
    get login():string{
        return this._login;
    }
    get password():string{
        return '****';
    }
    set password(value:string){
        this._password=value;
    }

    showInfo(): void {
        console.log('Name: $ {this._name}, Login: $ {this._login}');
    }
    eq(otherUser: User):
    boolean {
        return this._grade === otherUser._grade;
    }
    lt(otherUser: User):
    boolean {
        return this._grade < otherUser._grade;
    }
    gt(otherUser: User):
    boolean {
        return this._grade >otherUser._grade;
    }

}
class SuperUser extends User{
    public _role: string;
    constructor(name: string, login: string,
        grade: number,
        password: string,
        role: string ) {
super(name,login,password,grade);
this._role=role;
        }
        get role(): string{
            return this._role;
        }
        set role(value:string){
            this._role=value;
        }
        showInfo(): void {
            console.log('name: $ {this.name}, login: ${this.login},role: ${this._role}');
        }
}
const user1 = new User('Paul McCartney', 'paul', '1234', 3)
const user2 = new User('George Harrison', 'george', '5678', 2)
const user3 = new User('Richard Starkey', 'ringo', '8523', 3)
const admin = new SuperUser('John Lennon', 'john', 5, 'admin', '0000')

user1.showInfo()
admin.showInfo()

console.log(Всего обычных пользователей: ${User})
console.log(Всего супер-пользователей: ${admin})

console.log( user1.lt(user2) )
console.log( admin.gt(user3) )
console.log( user1.eq(user3) )

user3.name = 'Ringo Star'
user1.password = 'Pa$$w0rd'

console.log(user3.name)
console.log(user2.password)
console.log(user2.login)

user2.login = 'geo'

console.log(user3.grade)
admin.grade = 10
