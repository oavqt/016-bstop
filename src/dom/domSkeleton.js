import domElement from './domElement';

const domSkeleton = () => {
  const skeleton = domElement.create(
    'div',
    {
      class: 'content__container'
    },
    domElement.create(
      'div',
      { class: 'container__left' },
      domElement.create('div', { class: 'left__portrait' })
    ),
    domElement.create(
      'div',
      { class: 'container__middle' },
      domElement.create(
        'div',
        { class: 'middle__information' },
        domElement.create('div', { class: 'information__board' }),
        domElement.create('div', { class: 'information__turn' })
      ),
      domElement.create(
        'div',
        { class: 'middle__board' },
        domElement.create('div', { class: 'board__first' }),
        domElement.create('div', { class: 'board__second' })
      ),
      domElement.create('div', { class: 'middle__tooltip' }),
      domElement.create('button', { class: 'button--tooltip' })
    ),
    domElement.create(
      'div',
      { class: 'container__right' },
      domElement.create(
        'div',
        { class: 'right__option' },
        domElement.create('button', { class: 'button--option' })
      ),
      domElement.create('div', { class: 'right__ships' }),
      domElement.create('div', { class: 'right__portrait' })
    )
  );

  return skeleton;
};

export default domSkeleton;
