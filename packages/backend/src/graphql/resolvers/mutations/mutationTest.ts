import { connection } from '../../../memoryDB/connection'
import { User } from '../../../models/User'
import bcrypt from 'bcrypt'
import { GraphQLError } from 'graphql'

export const mutationTest = async (_parent, args, _context, _info) => {
  return args.test
}

export const loginMutation = {
  async resolve(_: unknown, { email, password }) {
    try {
      const user = await User.findOne({ email });
      if (!user) {
        throw new GraphQLError('Usuário não encontrado', {
          extensions: {
            code: 'USER_NOT_FOUND',
            http: { status: 401 }
          }
        });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        throw new GraphQLError('Senha inválida', {
          extensions: {
            code: 'INVALID_PASSWORD',
            http: { status: 401 }
          }
        });
      }

      return user;
    } catch (error) {
      if (error instanceof GraphQLError) {
        throw error;
      }
      throw new GraphQLError('Erro ao realizar login', {
        extensions: {
          code: 'INTERNAL_SERVER_ERROR',
          http: { status: 500 }
        }
      });
    }
  }
};
