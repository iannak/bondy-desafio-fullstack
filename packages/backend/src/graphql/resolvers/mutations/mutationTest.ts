import { connection } from '../../../memoryDB/connection'
import { User } from '../../../models/User'
import bcrypt from 'bcrypt'

export const mutationTest = async (_parent, args, _context, _info) => {
  return args.test
}

export const loginMutation = {
  async resolve(_: unknown, { email, password }) {
    try {
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error('Usuário não encontrado');
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        throw new Error('Senha inválida');
      }

      return user;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
      throw new Error('Erro ao realizar login');
    }
  }
};
