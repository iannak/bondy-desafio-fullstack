import { GraphQLResolveInfo } from 'graphql'
import { mutationTest, loginMutation } from './mutationTest'

export default {
  mutationTest: (
    parent: any,
    args: any,
    context: any,
    info: GraphQLResolveInfo
  ) => mutationTest(parent, args, context, info),
  login: loginMutation
}
