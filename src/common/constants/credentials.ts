import { FormSelectors } from './page.selectors';

const loginFormProps: TFormProps = {
   loginTagName: FormSelectors.LOGIN.INPUT_LOGIN,
   passwordTagName: FormSelectors.LOGIN.INPUT_PASSWORD,
   submitTagName: FormSelectors.LOGIN.BUTTON_SUBMIT,
};

const loginData: TDataProps = {
   login: 'JosephAnderson1064453@gmail.com',
   password: 'F7IvblI6Y',
};

interface LoginTypeProps {
   formProps: {
      loginTagName: string;
      passwordTagName: string;
      submitTagName: string;
   };
   dataProps: { login: string; password: string };
}

type TFormProps = LoginTypeProps['formProps'];
type TDataProps = LoginTypeProps['dataProps'];

export {
   loginFormProps,
   loginData,
   type LoginTypeProps,
   type TFormProps,
   type TDataProps,
};
