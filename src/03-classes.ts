
class Person {
  //Esto no era posible en javascript.
  private name: string;
  private id: number;

  //Defino el constructor para esta clase.
  constructor(nombre: string, id: number) {
    //Asigno los argumentos del constructor a las variables privadas.
    this.name = nombre;
    this.id = id;
  }

  //Se crean los Getter and Setters para los campos que pueden ser accedidos mediante
  //estos métodos.
  getName(): string {
    return this.name;
  }

  setName(nombre: string): void {
    this.name = nombre;
  }

  getId(): number {
    return this.id;
  }

  setId(id: number): void {
    this.id = id;
  }
}

// Para definir un objeto de una clase, se realiza de manera similar a la definición de una variable
// de un tipo en particular, con la diferencia de la ejecución de su constructor.
const Edison: Person = new Person('Edison', 1);


class Estudiante extends Person {
  private curso : string;

  constructor( name: string, id: number, curso: string){
    super(name, id);
    this.curso = curso;
  }

  getId(): number {
    return super.getId() * 100;
  }

  //Get and Set
  getCurso(): string {
    return this.curso;
  }

  setCurso(curso: string): void {
    this.curso = curso;
  }
}
