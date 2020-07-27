import React from 'react';

import './ExampleComponent.scss';

// interface ExampleComponentProps {
//   exampleVariable: String,
//   click: Function,
// }

// const ExampleComponent = ({ exampleVariable, click }: ExampleComponentProps) => {
const ExampleComponent = () => { // hooks
  return (
    <>
      <button
        type="button"
        className="example-component"
        // onClick={() => click('Example Payload')}
      >
        pass
      </button>
    </>
  );
};

export default ExampleComponent; // hooks

// const propsShape = {
//   exampleVariable: '',
// };

// export default connect(
//   buildMapStateToProps({ propsShape }),
//   { click: exampleFunction },
// )(ExampleComponent);
