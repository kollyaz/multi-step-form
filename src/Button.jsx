export function Button({ children, className, ...rest }) {
  return (
    <button type="submit" className={className} {...rest}>
      {children}
    </button>
  );
}
