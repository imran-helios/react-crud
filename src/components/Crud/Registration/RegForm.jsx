import React, { useState } from "react";
import Input from "./Input";

const RegForm = (props) => {
  const [focused, setFocused] = useState(false)

  const formFields = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Enter Name",
      label: "Name",
      required: true,
      pattern: "^[A-Za-z][A-Z a-z]{3,16}$",
      errorMessage: "Name should be 3-16 characters and should not include any special character *",
    },
    {
      id: 2,
      name: "phone",
      type: "tel",
      placeholder: "Enter Phone",
      label: "Phone",
      required: true,
      pattern: `[+]?([8]{2})?(01)[3-9]{1}[0-9]{8}`,
      errorMessage: "Phone Number Not Vaild *",
    }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()

    const form  = e.target

    let formData = new FormData()
    formData.append('name', props.values.name)
    formData.append('phone', props.values.phone)
    formData.append('photo', props.values.photo)


    if (props.isEdit) {
      fetch(`http://127.0.0.1:8000/updatestu/${props.id}`, {
        method: 'PATCH',
        body: formData
      }).then(res => res.json())
        .then(data => {
          props.getData()
          props.setIsEdit(false)
          props.setValues({
            name: '',
            phone: '',
            photo: null
          })
          setFocused(false)
        })

    } else {
      fetch('http://127.0.0.1:8000/stucreate/', {
        method: 'POST',
        body: (formData)
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          props.getData()
          props.setValues({
            name: '',
            phone: '',
            photo: null
          })
          setFocused(false)
        })
    }
    form.reset()
  }

  const handleChange = (e) => {
   const new_value =  e.target.type === "file" ? e.target.files[0] : e.target.value
    props.setValues({
      ...props.values,
      [e.target.name]: new_value
    })
  }
  return (
    <div className="reg_fm">
      <h2>Add New User</h2>
      <form
        onSubmit={handleSubmit}
      >
        {formFields.map(field =>
          <Input
            key={field.id}
            {...field}
            handleChange={handleChange}
            value={props.values[field.name]}
            focused={focused}
            setFocused={setFocused}
          />
        )}
        <input name = 'photo' onChange={handleChange} type="file" required />
        <button className="add_user_btn" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegForm;
