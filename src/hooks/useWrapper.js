const useWrapper = () => {
  /**
   * Returns component wrapped into wrapper, if wrapper is defined
   * @param {ReactComponent} component
   * @param {Object} wrapper optional
   *  .tag {String}
   *  .attributes {Object}
   *    <attrName>: <attrValue>
   *    ...
   */
  const renderWithWrapper = (Component, wrapper) => {
    if (wrapper) {
      const WrapperTag = wrapper.tag;
      return <WrapperTag {...wrapper.attributes}>{Component}</WrapperTag>;
    } else {
      return Component;
    }
  };

  return {
    renderWithWrapper
  };
};

export default useWrapper;
