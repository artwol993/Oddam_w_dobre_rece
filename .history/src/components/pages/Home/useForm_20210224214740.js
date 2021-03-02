import { useState, useEffect } from 'react'

const useForm = () => {
    const [values, setValues] = useState({
        name: "";
        email: "";
        text: "";
    })

    const [errors, setErrors] = useState({})


    const handleChange = e => {
const {name, value}=s
        setValues({
            ...values,
            [e.target.name]:e.target.values
        })
    }
}