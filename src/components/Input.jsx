import { useState } from 'react';

function Input({ field }) {
  const hangleToggle = () => {
    field.setValue(!field.value);
  };

  return (
    <div className="form__field">
      <label className="form__field--label">{field.label}</label>
      {field.type === 'toggle' ? (
        <span
          className={`form__field--toggle ${
            field.value
              ? 'form__field--toggle-present'
              : 'form__field--toggle-absent'
          }`}
          onClick={hangleToggle}
        ></span>
      ) : (
        <div>
          <input
            className="form__field--input"
            name={field.name}
            type={field.type}
            value={field.value || ''}
            disabled={field.disabled || false}
            onChange={(e) => field.setValue(e.target.value)}
          />
          {field.errorMessage ? (
            <span className="form__field--error">{field.errorMessage}</span>
          ) : null}
        </div>
      )}
    </div>
  );
}

export default Input;
