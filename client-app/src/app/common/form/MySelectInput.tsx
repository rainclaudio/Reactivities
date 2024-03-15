import { useField } from "formik";
import { Form, Label, Select } from "semantic-ui-react";

interface Props {
  placeholder: string;
  name: string;
  options: any;
  label?: string;
}

export const MySelectInput = (props: Props) => {
  const [field, meta, helpers] = useField(props.name);

  // notes: 
  // 1. what's meta?
  // 2. we are using a combination between semantic-ui and formik (Form and useField respectively)
  // 3. that is meta.touched
  // 4. note the dropdown_props
  return (
    <Form.Field error={meta.touched && !!meta.error}>
      <label>{props.label}</label>
      <Select
        clearable // whats this?
        options={props.options}
        value={field.value || null}
        onChange={(e, d) => helpers.setValue(d.value)}
        // onBlur={() => helpers.setTouched(true)}
        placeholder={props.placeholder}
      >
        </Select>
        {meta.touched && meta.error ? (
          <Label basic color="red">
            {meta.error}
          </Label>
        ) : null}
    </Form.Field>
  );
};
