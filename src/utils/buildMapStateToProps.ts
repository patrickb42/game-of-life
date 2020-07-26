import { filterObject } from './filterObject';

interface BuildMapStateToPropsArg {
  propsShape: Object,
}

export function buildMapStateToProps({ propsShape }: BuildMapStateToPropsArg) {
  return (state: Object) => filterObject({
    sourceObject: state,
    filter: propsShape,
  });
}

export default buildMapStateToProps;
