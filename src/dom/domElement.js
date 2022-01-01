const domElement = {
  create: (type, attributes, ...children) => {
    const parentElement = document.createElement(type);
    const attrs = Object.keys(attributes);

    attrs.forEach((attr) => {
      parentElement.setAttribute(attr, attributes[attr]);
    });

    children.forEach((childElement) => {
      if (typeof childElement === 'string')
        parentElement.append(document.createTextNode(childElement));
      else parentElement.appendChild(childElement);
    });

    return parentElement;
  }
};

export default domElement;
