import { Record } from 'immutable';

// eslint-disable-next-line no-unused-vars
import { ReadonlyRecord } from '../react-app-env';

interface NewRecordArg<T>{
  defaultValues: T,
  values?: T,
}

export const newRecord = <T>({ defaultValues, values }: NewRecordArg<T>) => (
  (values === undefined)
    ? Record(defaultValues)() as ReadonlyRecord<T>
    : Record(defaultValues)(values) as ReadonlyRecord<T>
);

export default {};
