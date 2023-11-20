import { Formik, Form } from "formik";
import formJson from "../data/custom-form.json";
import { MySelect, MyTextInput } from "../components";
import * as Yup from "yup";

const initialValues: { [key: string]: any } = {};
const requiredField: { [key: string]: any } = {};

for (const input of formJson) {
  initialValues[input.name] = input.value;
  if (!input.validations) continue;
  let schema = Yup.string();
  for (const rule of input.validations) {
    if (rule.type === "required") {
      schema = schema.required("Este campo es requerido");
    }
    if (rule.type === "minLength") {
      schema = schema.min((rule as any).value || 2, `Debe tener al menos ${(rule as any).value || 2} caracteres`);
    }
    if (rule.type === "email") {
      schema = schema.email("Ingrese un formato de correo correcto");
    }
    // otras reglas
    requiredField[input.name] = schema;
  }
}

const validationSchema = Yup.object({ ...requiredField });

export const DynamicForm = () => {
  return (
    <div>
      <h1>DynamicForm</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {() => (
          <Form noValidate>
            {formJson.map(({ type, name, label, placeholder, options }) => {
              if (type === "input" || type === "password" || type === "email") {
                return (
                  <MyTextInput
                    key={name}
                    type={type as any}
                    name={name}
                    label={label}
                    placeholder={placeholder}
                  />
                );
              } else if (type === "select") {
                return (
                  <MySelect key={name} label={label} name={name}>
                    <option value="">Select an Option</option>
                    {options?.map(({ id, label }) => (
                      <option key={id} value={id}>
                        {label}
                      </option>
                    ))}
                  </MySelect>
                );
              }
            })}
            <span>Hola Mundo</span>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
