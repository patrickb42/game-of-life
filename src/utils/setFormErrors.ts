import { ValidationError } from 'yup';

interface SetFormErrorsProps {
  setter: React.Dispatch<React.SetStateAction<any>>,
  errors: [ValidationError],
}

interface Accumulator {
  [key: string]: any,
}

export const setFormErrors = ({ setter, errors }: SetFormErrorsProps) => {
  setter((oldState: Object) => {
    const cleanState = Object.keys(oldState).reduce((acc: Accumulator, key) => {
      acc[key] = '';
      return acc;
    }, {});

    return errors.reduce((acc: Accumulator, error) => {
      acc[error.path] = acc[error.path] === '' ? error.errors[0] : acc[error.path];
      return acc;
    }, cleanState);
  });
};

export default setFormErrors;
