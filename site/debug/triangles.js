import React from 'react';

const colors = [
  null,
  'gray',
  'pink',
  'red',
  'orange',
  'yellow',
  'green',
  'teal',
  'blue',
  'purple',
  'lighten5',
  'lighten10',
  'lighten25',
  'lighten50',
  'lighten75',
  'darken5',
  'darken10',
  'darken25',
  'darken50',
  'darken75'
];

const directions = [
  'u', 'r', 'b', 'r'
];

function TriangleEl(props) {
  const triangleClass = `triangle${props.size ? '-' + props.size : ''} triangle${props.size ? '-' + props.size : ''}--${props.direction} color-${props.color}`;
  return (
    <div className='inline-block mr18'>
      <div className={triangleClass} />
    </div>
  );
}

class Triangles extends React.Component {
  render() {

    return (
      <div>
        <h1 className='txt-headline mb18'>
          Triangles
        </h1>

        {directions.map((d) =>
          colors.map((c) => <TriangleEl color={c} direction={d} size={null} />)
        )}

        {directions.map((d) =>
          colors.map((c) => <TriangleEl color={c} direction={d} size='l' />)
        )}

        {directions.map((d) =>
          colors.map((c) => <TriangleEl color={c} direction={d} size='xl' />)
        )}


      </div>
    );
  }
}

export { Triangles };
