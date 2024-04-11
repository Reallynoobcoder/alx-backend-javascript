class HolbertonCourse{
    constructor(name, length, students){
        this.name = name;
        this.length = length;
        this.students = students;
    }

    set name(newName) {
        if (typeof newName !== 'string') {
            throw new TypeError(`${newName} must be a string`);
        }
        this._name = newName;
    }

    set length(newLenght) {
        if (typeof newLenght !== int) {
            throw new TypeError('${newLenght} Length must be a number')
        }

        this._length = newLenght;
    }

    set students(newStudents) {
        if (!Array.isArray(newStudents) || newStudents.some(student => typeof student !== 'string')) {
            throw new TypeError('Students must be an array of strings');
        }
        this._students = newStudents;
    }

    get name() {
        return this._name;
    }

    get length() {
        return this._length;
    }

    get students(){
        return this._students;
    }
}
