import { Grid, ToggleButton } from '@aws-amplify/ui-react';
import * as React from 'react';

const InputBox = () => {
  const [toggle, setToggle] = React.useState(false);
  return (
    <Grid
    as='form'
    rowGap='1rem'
    >
      <ToggleButton
      children='toggle me!'
      defaultPressed={false}
      isPressed={toggle}
      onChange={(e) => {
        setToggle(!toggle);
      }}
      >
      </ToggleButton>
    </Grid>
  )
};

export default InputBox;