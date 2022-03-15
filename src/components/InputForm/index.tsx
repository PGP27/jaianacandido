import { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

const InputForm = ({ type, name, placeholder }: any) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: ref => {
        return ref.current.value
      },
      setValue: (ref, value) => {
        ref.current.value = value
      },
      clearValue: ref => {
        ref.current.value = ''
      },
    })
  }, [fieldName, registerField]);

  if (type === 'text') {
    return (
      <input
        id={name}
        name={name}
        type="text"
        ref={inputRef}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className="my-2 ring-1 ring-slate-400 p-2 rounded-md outline-none focus:ring-sky-500"
      />
    );
  }

  if (type === 'textarea') {
    return (
      <textarea
        id={name}
        name={name}
        ref={inputRef}
        defaultValue={defaultValue}
        placeholder={placeholder}
        rows={5}
        className="resize-none my-2 ring-1 ring-slate-400 p-2 rounded-md outline-none focus:ring-sky-500"
      />
    );
  }

  return null;
};

export default InputForm;
