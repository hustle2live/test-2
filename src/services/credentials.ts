const loginFormProps: formProps = {
   loginTag: '.signin__item input[type="text"]',
   passwordTag: '.signin__item input[type="password"]',
   submitTag: 'button.signin__action',
};
const loginData: dataProps = {
   login: 'JosephAnderson1064453@gmail.com',
   password: 'F7IvblI6Y',
};

interface LoginTypeProps {
   formProps: { loginTag: string; passwordTag: string; submitTag: string };
   dataProps: { login: string; password: string };
}

type dataProps = Pick<LoginTypeProps, 'dataProps'>['dataProps'];
type formProps = Pick<LoginTypeProps, 'formProps'>['formProps'];

export {
   loginFormProps,
   loginData,
   type LoginTypeProps,
   type dataProps,
   type formProps,
};
