import { useState, useEffect } from 'react';

const initialState = {
  _id: '',
  userAnswer: '',
};

const useRadioForm = () => {
  const [formData, setFormData] = useState(initialState);
  const [array, setArray] = useState([]);
  console.log(
    '🚀 ~ file: useRadioForm.js ~ line 5 ~ useRadioForm ~ formData',
    formData,
  );

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormData({
      _id: name,
      userAnswer: value,
    });
  };

  useEffect(() => {
    if (array.some(({ _id }) => _id === formData._id)) {
      const newArray = array.map(item =>
        item._id === formData._id ? formData : item,
      );
      setArray(newArray);
    } else {
      formData._id &&
        setArray(prev => {
          return [...prev, formData];
        });
    }
  }, [formData]);

  return [array, formData, handleChange];
};

export default useRadioForm;
