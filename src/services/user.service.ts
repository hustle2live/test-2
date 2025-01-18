import { HTMLdataParser } from '../common/helpers/dataParser';
import { TUser, IUserService } from '../common/types/browserController.type';

class UserService implements IUserService {
   private userComparingList: TUser[] = [];

   async parseUserFromHTML(
      html: string
   ): Promise<{ age: number | null; name: string | null }> {
      return await HTMLdataParser(html);
   }

   async checkUsersOrder(user: {
      name: string;
      age: number;
   }): Promise<TUser[]> {
      this.userComparingList.unshift(user);

      const isCycled =
         this.userComparingList.length > 2 &&
         this.userComparingList.every(
            ({ age, name }) => age === user.age && name === user.name
         );

      if (isCycled) {
         throw new Error(
            `Users repeated: ${JSON.stringify(this.userComparingList)}`
         );
      }

      if (this.userComparingList.length > 3) {
         this.userComparingList.pop();
      }

      return this.userComparingList;
   }
}

const userService = new UserService();

export { type UserService, userService };
