// eslint-disable-next-line
import { Record } from 'immutable';

export interface ReadonlyRecord<T> extends Record<T>, Readonly<T> {
  // intentionally empty
}
