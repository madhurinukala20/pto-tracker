function Button({ children, ...rest }) {
  return (
    <button className="button button--full" {...rest}>
      {children}
    </button>
  );
}

export default Button;
