import toast from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import { EmailTemplate } from '../components';
import { renderToStaticMarkup } from 'react-dom/server';

const useEmail = () => {
  const handleEmail = (values: any, actions: any) => {
    if (values.selectedOptions.length === 0) {
      toast.error('Selecione ao menos um quadrinho!');
    } else {
      emailjs
        .send(
          process.env.REACT_APP_EMAILJS_SERVICE_ID as string,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID as string,
          {
            subject: 'Marvel Comics - Quadrinhos selecionados',
            name: values.name,
            email: values.email,
            message: renderToStaticMarkup(<EmailTemplate values={values} />)
          },
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
        .then(
          (result) => {
            toast.success('Email enviado com sucesso!');
            // actions.resetForm();
          },
          (error) => {
            toast.error('Ocorreu um erro, tente novamente.', error.text);
          }
        );
    }
  };

  return { handleEmail };
};

export default useEmail;
