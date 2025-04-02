import { Usuario } from "../types/alimento.d";

export const usuariosMock: Usuario[] = [
  {
    id: 1,
    email: "aluno@tcc.com",
    nome: "Aluno TCC",
  },
];

export const fazerLogin = (
  email: string
): Promise<{ usuario: Usuario; token: string }> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const usuario = usuariosMock.find((u) => u.email === email);
      if (usuario) {
        resolve({
          usuario,
          token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.MOCK.TOKEN",
        });
      } else {
        reject(new Error("Usuário não encontrado"));
      }
    }, 1000);
  });
};
