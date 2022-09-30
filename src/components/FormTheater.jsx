import { Divider, Flex, Grid, Heading } from '@aws-amplify/ui-react';
import * as React from 'react';

const FormTheater = (props) => {
  return (
    <Flex
    direction='column'
    >
      <Heading level={1}>
        Form Theater
      </Heading>
      <Divider size='large'  />
      <Grid
        rowGap='2rem'
        marginTop='1rem'
        templateColumns="repeat(2, auto)"
      >
      {props.forms.map( ({ name, form }) => (
        <Flex
        key={`${name}Form`}
        direction='column'
        width='30rem'
         >
          <Heading level={4} children={name} />
          {form}
        </Flex>
      ))}
      </Grid>
    </Flex>
  )
};

export default FormTheater;