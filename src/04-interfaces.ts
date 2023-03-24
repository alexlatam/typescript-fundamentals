type Marca = string;

interface Vehiculo {
  marca: Marca;
  modelo: string;
  anio: number;
  color?: string; // ? indica que el campo es opcional
  tipo: string;
}
