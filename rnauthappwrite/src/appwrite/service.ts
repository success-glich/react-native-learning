import {ID, Account, Client} from 'appwrite';
import Config from 'react-native-config';
import Snackbar from 'react-native-snackbar';
import App from '../App';

const appwriteClient = new Client();

const APPWRITE_ENDPOINT: string = Config.APPWRITE_ENDPOINT!;
const APPWRITE_PROJECT_ID: string = Config.APPWRITE_PROJECT_ID!;

type CreateUserAccount = {
  email: string;
  password: string;
  name: string;
};

type LoginUserAccount = Pick<CreateUserAccount, 'email' | 'password'>;

class AppwriteService {
  account;
  constructor() {
    appwriteClient
      .setEndpoint(APPWRITE_ENDPOINT)
      .setProject(APPWRITE_PROJECT_ID);

    this.account = new Account(appwriteClient);
  }
  // * create a new record of user inside

  async createUserAccount({name, email, password}: CreateUserAccount) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name,
      );
      if (userAccount) {
        //TODO: create login feature
        return this.login({email, password});
      } else {
        return userAccount;
      }
    } catch (error) {
      Snackbar.show({
        text: String(error),
        duration: Snackbar.LENGTH_LONG,
      });
      console.log('Appwrite service :: createAccount()::' + error);
    }
  }

  async login({email, password}: LoginUserAccount) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (err) {
      console.log('Appwrite service :: login()::' + err);
      Snackbar.show({
        text: String(err),
        duration: Snackbar.LENGTH_LONG,
      });
    }
  }

  async getCurrentUser() {
    try {
      const user = await this.account.get();
      return user;
    } catch (error) {
      console.log('Appwrite service :: getCurrentUser()::' + error);
      Snackbar.show({
        text: String(error),
        duration: Snackbar.LENGTH_LONG,
      });
    }
  }
  async logout() {
    try {
      return this.account.deleteSession('current');
    } catch (err) {
      console.log('Appwrite service :: logout()::' + err);
      Snackbar.show({
        text: String(err),
        duration: Snackbar.LENGTH_LONG,
      });
      return err;
    }
  }
}

export default AppwriteService;
