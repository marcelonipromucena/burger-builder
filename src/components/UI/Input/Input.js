import React from 'react';
import styles from './Input.module.css';

const input = (props) => {

  const inputClasses = [styles.InputElement];

  let inputElement = null;
  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push(styles.Invalid);
  }
  switch (props.elementType) {

    case ('input'):
      inputElement =
        <input onChange={props.changed}
          className={inputClasses.join(' ')}
          value={props.value}
          {...props.elementConfig} />;
      break;
    case ('textarea'):
      inputElement =
        <textarea onChange={props.changed}
          className={inputClasses.join(' ')}
          value={props.value}
          {...props.elementConfig} />;
      break;
    case ('select'):
      inputElement =
        <select onChange={props.changed}
          {...props.elementConfig}
          className={inputClasses.join(' ')}>
          {props.elementConfig.options.map(option => (
            <option key={option.value}
              value={option.value}>{option.displayValue}</option>
          ))}

        </select>;
      break;
    default:
      inputElement =
        <input onChange={props.changed}
          className={inputClasses.join(' ')}
          value={props.value}
          {...props.elementConfig} />;
  }

  return (
    <div>
      <label className={styles.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default input;