function isEmpty(el = []) {
  return (
    el.length === 0 || el === null || el === undefined || el === [] || el === {}
  );
}

export { isEmpty };
