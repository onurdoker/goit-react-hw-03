import styles from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";


const ContactForm = () => {
  
  const nameId = useId();
  const numberId = useId();
  const initialFormValues = {
    name: "",
    number: "",
  };
  
  const handleSubmit = (values,
                        actions) => {
    
    //TODO => Do not forget to delete console.log
    console.log(values);
    console.log(actions);
    
    actions.resetForm();
  };
  
  const FeedbackSchema = Yup.object()
                            .shape({
                                     name: Yup.string()
                                              .min(3,
                                                   "Name must be at least 3 characters long")
                                              .max(50,
                                                   "Name must be maximum 50 character long")
                                              .required("Name is required"),
                                     number: Yup.string()
                                                .min(7,
                                                     "The phone number must contain 7 characters")
                                                .max(7,
                                                     "The phone number must contain 7 characters")
                                                .required("Phone number is required"),
                                   });
  
  return (
      <div className={styles.body}>
        <Formik
            initialValues={initialFormValues}
            onSubmit={handleSubmit}
            validationSchema={FeedbackSchema}
        >
          
          <Form className={styles.form}>
            <div className={styles.name}>
              <label htmlFor={nameId}>Name :</label>
              <Field
                  type={"text"}
                  name="name"
                  id={nameId}
              />
              <ErrorMessage
                  className={styles.error}
                  name={"name"}
                  component={"span"}
              />
            </div>
            
            <div className={styles.name}>
              <label htmlFor={numberId}>Number :</label>
              <Field
                  type={"phone"}
                  name="number"
                  id={numberId}
              />
              <ErrorMessage
                  className={styles.error}
                  name={"number"}
                  component={"span"}
              />
            </div>
            
            <div className={styles.name}>
              <button type="submit">
                Add contact
              </button>
            </div>
          </Form>
        </Formik>
      </div>
  );
};

export default ContactForm;