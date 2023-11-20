import { MyTextInput } from "../components";
import "../styles/styles.css";
import { Form, Formik } from "formik";
import * as Yup from "yup";

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Page</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password1: "",
          password2: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, "Debe tener minimo 2 caracteres")
            .max(15, "Debe tener 15 caracteres o menos")
            .required("Requerido"),
          email: Yup.string()
            .email("debe ingresar un email valido")
            .required("Requerido"),
          password1: Yup.string()
            .required("Requerido")
            .min(6, "Debe tener al menos 6 caracteres"),
          password2: Yup.string()
            // .test(
            //   "itMatches",
            //   "password must be equal than first password",
            //   (value, testContext) => {
            //     if (testContext.parent.password1 === value) return true;
            //     return false;
            //   }
            // )
            .required("Requerido")
            .oneOf([Yup.ref("password1")], "las contrasenas deben ser iguales"),
        })}
      >
        {({ resetForm }) => (
          <Form>
            <MyTextInput label="Name" name="name" placeholder="Full Name" />

            <MyTextInput
              label="Email"
              name="email"
              placeholder="Email Address"
              type="email"
            />

            <MyTextInput
              label="Password"
              name="password1"
              placeholder="Password"
              type="password"
            />

            <MyTextInput
              label="Repeat Password"
              name="password2"
              placeholder="Password"
              type="password"
            />

            <button type="submit">Submit</button>
            <button type="button" onClick={() => resetForm()}>
              Reset
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
