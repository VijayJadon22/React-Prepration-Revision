const withLoading = (WrappedComponent) => {
  return ({ loading, ...props }) => {
    return loading ? <WrappedComponent {...props} /> : <h2>Loading...</h2>;
  };
};

export default withLoading;