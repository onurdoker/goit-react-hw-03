import styles from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { useId } from "react";


const ContactForm = ({ handleAddContact }) => {
  
  const nameId = useId();
  const numberId = useId();
  const initialFormValues = {
    name: "",
    number: "",
  };
  
  const handleSubmit = (values,
                        actions) => {
    values.name = capitalize(values.name.trim());
    values.number = reOrganizeNumber(values.number.trim());
    
    handleAddContact(values);
    
    
    console.log(values);
    actions.resetForm();
  };
  
  function capitalize(name) {
    if (name.includes(" ")) {
      const firstName = name.split(" ")[0];
      const lastName = name.split(" ")[1];
      
      const firstNameCap = firstName.charAt(0)
                                    .toUpperCase() + firstName.slice(1);
      const lastNameCap = lastName.charAt(0)
                                  .toUpperCase() + lastName.slice(1);
      
      return `${firstNameCap} ${lastNameCap}`;
    } else {
      return name.charAt(0)
                 .toUpperCase() + name.slice(1);
    }
  }
  
  function reOrganizeNumber(phoneNumber) {
    return phoneNumber.slice(0,
                             3) + "-" + phoneNumber.slice(3,
                                                          5) + "-" + phoneNumber.slice(5);
  }
  
  
  const FeedbackSchema = Yup.object()
                            .shape({
                                     name: Yup.string()
                                              .min(3,
                                                   "Name must be at least 3 characters long")
                                              .max(50,
                                                   "Name must be maximum 50 character long")
                                              .matches(/^[A-Za-z\s]+$/,
                                                       "Name must contain only letters")
                                              .required("Name is required"),
                                     number: Yup.string()
                                                .matches(/^\d{7}$/,
                                                         "The phone number must contain exactly 7 digits")
                                                .required("Phone number is required"),
                                   });
  // values")
  
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