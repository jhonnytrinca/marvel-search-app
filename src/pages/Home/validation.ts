import * as yup from 'yup'

export const schemaDefault = yup.object().shape({
  selectedOptions: yup.array(),
  name: yup.string().required('É necessário informar um nome'),
  email: yup.string().email('Informe um email válido').required('É necessário informar um email')
}) 