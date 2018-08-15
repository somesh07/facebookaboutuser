class UserProfile{

    public firstName : string ;
    public lastName : string ;
    public email : string ;
    public mobile : string ;
    public dob : string ;
    public eductions : string;
    public lives :string;
    public gender :string;

   constructor(firstname:string,lastname:string,email:string,dob:string,educations:string,city:string,mobile:string,gender :string) {
       this.firstName = firstname;
       this.lastName = lastname;
       this.email = email;
       this.dob = dob;
       this.eductions = educations;
       this.lives  = city;
       this.mobile = mobile;
       this.gender = gender;
    }

    getName = ()  => {
        return this.firstName+' '+this.lastName;
    }
    getAge = () =>{
        var birthday = +new Date(this.dob);
        return Math.floor((Date.now() - birthday) / (31557600000));

    }
    getDob = () =>{
        return this.dob

    }
    getMobile = () =>{
        return this.mobile
    }
    getEducation = () =>{
        return this.eductions
    }
    getLive = () =>{
        return this.lives
    }
    getEmail = () =>{
        return this.email
    }
    getGender = () =>{
        return this.gender
    }
    

}


let user  = new UserProfile('Somesh','kumar','somesh@gmail.com','1994-05-21','MAKAUT','Delhi','9097873118','male');

console.log(user.getName())
