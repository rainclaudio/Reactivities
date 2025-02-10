import { ErrorMessage, Form, Formik } from "formik";
import { MyTextInput } from "../../app/common/form/MyTextInput";
import { Button, Header, Label } from "semantic-ui-react";
import { useStore } from "../../app/stores/store";
import { observer } from "mobx-react-lite";

export const LoginForm = observer(() => {
  const { userStore } = useStore();

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        error: null,
      }}
      onSubmit={(values, { setErrors }) =>
        userStore
          .login(values)
          .catch(() => setErrors({ error: "Invalid email or password" }))
      }
    >
      {({ handleSubmit, isSubmitting, errors }) => (
        <Form
          className="ui form"
          style={{ padding: "2rem" }}
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <Header
            as="h2"
            content="Login to Reactivities"
            color="teal"
            textAlign="center"
          />
          <MyTextInput placeholder="Email" name="email" />
          <MyTextInput placeholder="Password" name="password" type="password" />
          <ErrorMessage
            name={"error"}
            render={() => (
              <Label
                style={{ marginBottom: 10 }}
                basic
                color="red"
                content={errors.error}
              ></Label>
            )}
          ></ErrorMessage>
          <Button
            loading={isSubmitting}
            positive
            content="login"
            type="submit"
            fluid
          />
        </Form>
      )}
    </Formik>
  );
});
