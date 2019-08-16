import React from 'react'
import {Form, Field, withFormik} from 'formik'
import * as Yup from 'yup'

const SmurfForm = ({errors, touched}) => {
    return (
        <div>
            <h1>Smurf Sign Up</h1>
            <Form>
                <Field type="text" name="name" placeholder="name"/>
                    {touched.name && errors.name && (
                        <p className="error">{errors.name}</p>
                    )}
                <Field type="text" name="age" placeholder="age"/>
                    {touched.age && errors.age && (
                        <p className="error">{errors.age}</p>
                    )}
                <Field type="text" name="height" placeholder="height"/>
                    {touched.height && errors.height && (
                        <p className="error">{errors.height}</p>
                    )}
                    <button type="submit">Submit</button>
            </Form>
        </div>
    )
}

const FormikForm = withFormik({
    mapPropsToValues({name, age, height}) {
        return {
            name: name || "",
            age: age || "",
            height: height || ""
        }
    },
validationSchema: Yup.object().shape({
    name: Yup.string().required('Name Required'),
    age: Yup.string().required("Age required"),
    height: Yup.string().required('Height required')
})
})(SmurfForm)

export default FormikForm