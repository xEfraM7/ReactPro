import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";

export const FormikComponents = () => {
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
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" type="text" placeholder="First Name" />
            <ErrorMessage name="firstName" component="span" />

            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" type="text" placeholder="Last Name" />
            <ErrorMessage name="lastName" component="span" />

            <label htmlFor="email">Email Addres</label>
            <Field name="email" type="email" placeholder="Email" />
            <ErrorMessage name="email" component="span" />

            <label htmlFor="jobType">Type Job</label>
            <Field name="jobType" as="select">
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-sr">IT Sr.</option>
            </Field>
            <ErrorMessage name="jobType" component="span" />

            <label htmlFor="terms">
              Terms and Conditions <Field name="terms" type="checkbox" />
            </label>
            <ErrorMessage name="terms" component="span" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
