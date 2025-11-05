import classNames from "classnames";
import styles from "./SearchInput.module.css";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  ariaLabel?: string;
  disabled?: boolean;
  autoFocus?: boolean;
  className?: string;
}

const SearchInput = ({
  value,
  onChange,
  placeholder = "Search...",
  ariaLabel = "Search",
  disabled = false,
  autoFocus = false,
  className,
}: SearchInputProps) => {
  const handleClear = () => {
    onChange("");
  };

  return (
    <div className={classNames(styles.container, className)}>
      <div className={styles.inputWrapper}>
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          type="text"
          placeholder={placeholder}
          aria-label={ariaLabel}
          disabled={disabled}
          autoFocus={autoFocus}
          className={styles.input}
        />
        {value && (
          <button
            type="button"
            onClick={handleClear}
            className={styles.clearButton}
            aria-label="Clear search"
            disabled={disabled}
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchInput;
