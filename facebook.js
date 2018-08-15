var UserProfile = /** @class */ (function () {
    function UserProfile(firstname, lastname, email, dob, educations, city, mobile, gender) {
        var _this = this;
        this.getName = function () {
            return _this.firstName + ' ' + _this.lastName;
        };
        this.getAge = function () {
            var birthday = +new Date(_this.dob);
            return Math.floor((Date.now() - birthday) / (31557600000));
        };
        this.getDob = function () {
            return _this.dob;
        };
        this.getMobile = function () {
            return _this.mobile;
        };
        this.getEducation = function () {
            return _this.eductions;
        };
        this.getLive = function () {
            return _this.lives;
        };
        this.getEmail = function () {
            return _this.email;
        };
        this.getGender = function () {
            return _this.gender;
        };
        this.firstName = firstname;
        this.lastName = lastname;
        this.email = email;
        this.dob = dob;
        this.eductions = educations;
        this.lives = city;
        this.mobile = mobile;
        this.gender = gender;
    }
    return UserProfile;
}());
var user = new UserProfile('Somesh', 'kumar', 'somesh@gmail.com', '1994-05-21', 'MAKAUT', 'Delhi', '9097873118', 'male');
console.log(user.getName());
