export interface Alimento {
  id: number;
  nome: string;
  calorias: number;
  proteinas: number;
  carboidratos: number;
  gorduras?: number;
  porcao?: string;
}
