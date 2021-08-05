import { useState } from "react";

const useRadioForm = ({ initialState }) => {
    const [formData, setFormData] = useState(initialState);
    console.log("🚀 ~ file: useRadioForm.js ~ line 5 ~ useRadioForm ~ formData", formData)
    const array = [];

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setFormData({ ...formData, [name]: value });
    };
    array.push(formData)

  return [array, setFormData, handleChange ];
};

export default useRadioForm;