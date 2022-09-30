import { ThemeProvider, withAuthenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
import { BlogCreateForm, BlogUpdateForm, InputGalleryUpdateForm, PostUpdateForm, studioTheme } from './ui-components';
import { FormTheater, InputBox } from './components';
import '@aws-amplify/ui-react/styles.css'; // default theme
import { useDataStoreBinding } from '@aws-amplify/ui-react/internal';
import { InputGallery, Post, Blog } from './models';

Amplify.configure(awsconfig);

const App = () => {
  const posts = useDataStoreBinding({
    model: Post,
    type: 'collection'
  }).items;

  const inputs = useDataStoreBinding({
    model: InputGallery,
    type: 'collection',
  }).items;

  const blogs = useDataStoreBinding({
    model: Blog,
    type: 'collection',
  }).items;
  return (
    <ThemeProvider theme={studioTheme}>
      <FormTheater
      forms={[
        { name: 'BlogCreate', form: <BlogCreateForm
        onChange={(fields) => {
          const override = {
            ...fields,
            tags: [...fields?.tags, 'added my own element'],
          };
          console.log(JSON.stringify(override));
          return override;
        }}
        onValidate={{
          tags: (value) => {
            if (value === 'invalid') {
              return {
                hasError: true,
                errorMessage: 'invalid element being added'
              }
            } else {
              return {
                hasError: false,
              };
            }
          }
        }}
        /> },
        { name: 'BlogUpdate', form: <BlogUpdateForm blog={blogs[1]} /> },
        { name: 'PostUpdateForm', form: <PostUpdateForm post={posts[0]} /> },
        { name: 'SampleInputs', form: <InputBox /> },
        { name: 'InputGallery', form: <InputGalleryUpdateForm inputGallery={inputs[0]} /> },
      ]}
      ></FormTheater>
    </ThemeProvider>
  );
}

export default withAuthenticator(App);
