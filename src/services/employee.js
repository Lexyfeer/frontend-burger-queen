export class Employee {
    constructor(typeEmployee, name, email, pass){
        this.TypeEmployee = typeEmployee;
        this.Name = name;
        this.Email = email; 
        this.Pass = pass
    }
}

//La definicion para cada variable no es estricta como para el Schema de mongoose porque tu Nancy estas usando js en vez de ts