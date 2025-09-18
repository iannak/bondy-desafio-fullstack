import { connection } from '../../../memoryDB/connection'
import { User } from '../../../models/User'
import bcrypt from 'bcrypt'

export const login = async (_parent, args, _context, _info) => {
  await connection()
  const { email, password } = args
  const user = await User.findOne({ email })
  if (!user) {
    throw new Error('Usuário não encontrado')
  }
  const valid = await bcrypt.compare(password, user.password)
  if (!valid) {
    throw new Error('Senha incorreta')
  }
  // Retorna todos os campos do usuário
  return {
    _id: user._id,
    name: user.name,
    email: user.email,
    company: user.company,
    password: user.password,
    __typename: 'User',
  }
}
