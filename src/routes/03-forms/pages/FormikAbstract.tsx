import { Formik, Form } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";
import { MyCheckbox, MySelect, MyTextInput } from "../components";

export const FormikAbstract = () => {
  return (
    <div>
      <h1>Formik Yup Form Component</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Debe tener 15 caracteres o menos")
            .required("Requerido"),
          lastName: Yup.string()
            .max(10, "Debe tener 10 caracteres o menos")
            .required("Requerido"),
          email: Yup.string()
            .email("debe ingresar un email valido")
            .required("Requerido"),
          terms: Yup.boolean().oneOf([true], "Debe Aceptar las Condiciones"),
          jobType: Yup.string()
            .notOneOf(["it-sr"], "No papa esta equivocado")
            .required("Requerido"),
        })}
      >
        {/* (formik) - va en el llamado a la funcion de aqui abajo lo quite para evitar el non-used-vars */}
        {() => (
          <Form>
            <MyTextInput
              label="first Name"
              name="firstName"
              placeholder="First Name"
            />

            <MyTextInput
              label="Last Name"
              name="lastName"
              placeholder="Last Name"
            />

            <MyTextInput
              label="Email Addres"
              name="email"
              placeholder="Email Address"
              type="email"
            />

            <MySelect name="jobType" label="Job Type">
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-sr">IT Sr.</option>
            </MySelect>

            <MyCheckbox label="Terms & Conditions" name="terms" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
