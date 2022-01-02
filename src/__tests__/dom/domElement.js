/** *@jest-environment jsdom */

import domElement from '../../dom/domElement';

describe('domElement.create', () => {
  const testDOMElementDiv = domElement.create(
    'div',
    {
      class: 'testDOMElementDiv'
    },
    'testDOMElementDiv',
    domElement.create(
      'span',
      { class: 'testDOMElementSpan' },
      'testDOMElementSpan'
    )
  );

  test('expect the domElement function to create dom elements', () => {
    expect(testDOMElementDiv instanceof Element).toBe(true);
  });

  test('expect the domElement function to assign the passed in attributes to the created element', () => {
    const testDOMElementDivAttributes = [...testDOMElementDiv.attributes];

    const testDOMElementDivAttrs = testDOMElementDivAttributes.reduce(
      (firstAttr, nextAttr) => {
        const firstAttrNoParamReassign = firstAttr;

        firstAttrNoParamReassign[nextAttr.name] = nextAttr.value;
        return firstAttrNoParamReassign;
      },
      {}
    );

    expect(testDOMElementDivAttrs).toMatchObject({
      class: 'testDOMElementDiv'
    });
  });

  test('append a string child to the created dom element', () => {
    expect(testDOMElementDiv.firstChild.textContent).toBe('testDOMElementDiv');
  });

  test('calling the domElement function as a child should continually append the created element to the original parent', () => {
    const testDOMElementDivAttributes = [
      ...testDOMElementDiv.firstElementChild.attributes
    ];

    const testDOMElementDivAttrs = testDOMElementDivAttributes.reduce(
      (firstAttr, nextAttr) => {
        const firstAttrNoParamReassign = firstAttr;

        firstAttrNoParamReassign[nextAttr.name] = nextAttr.value;
        return firstAttrNoParamReassign;
      },
      {}
    );

    expect(testDOMElementDiv.childElementCount).toBe(1);
    expect(testDOMElementDiv.firstElementChild instanceof Element).toBe(true);
    expect(testDOMElementDiv.firstElementChild.firstChild.textContent).toBe(
      'testDOMElementSpan'
    );
    expect(testDOMElementDivAttrs).toMatchObject({
      class: 'testDOMElementSpan'
    });
  });
});
