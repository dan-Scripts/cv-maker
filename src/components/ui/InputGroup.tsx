import "../styles/InputGroup.css";

interface InputProps {
  id: string;
  placeholder: string;
  type: string;
  labelText: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
  optional?: boolean;
  recommended?: boolean;
  "data-key"?: string;
}

const InputGroup = ({
  id,
  placeholder,
  type,
  labelText,
  onChange,
  value,
  optional,
  recommended,
  "data-key": dataKey,
}: InputProps) => {
  return (
    <div className="input-group">
      <label htmlFor={id}>
        <span className="label-text">{labelText}</span>
        {optional && <span className="optional-text">optional</span>}
        {recommended && <span className="recommended-text">recommended</span>}
      </label>

      {type === "textarea" ? (
        <textarea
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          data-key={dataKey}
        ></textarea>
      ) : (
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          data-key={dataKey}
        />
      )}
    </div>
  );
};

export default InputGroup;
