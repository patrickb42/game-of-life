// eslint-disable-next-line no-unused-vars
import type { ValidationError } from 'yup';
// eslint-disable-next-line no-unused-vars
import type { ReadonlyRecord } from '../react-app-env';

interface SetFormErrorsImArgs<T> {
  setter: React.Dispatch<React.SetStateAction<ReadonlyRecord<T>>>,
  errors: [ValidationError],
}

export const setFormErrorsIm = <T>({ setter, errors }: SetFormErrorsImArgs<T>) => {
  setter((oldState) => (
    oldState
      .clear()
      .merge(errors.reduce((acc: any, error) => {
        acc[error.path] = acc[error.path] === undefined ? error.errors[0] : acc[error.path];
        return acc;
      }, {}))
  ));
};

export default setFormErrorsIm;
