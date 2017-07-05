import React from 'react';

const sizeCombos = [
  [12],
  [11, 1],
  [10, 2],
  [9, 3],
  [8, 4],
  [7, 5],
  [6, 6],
  [4, 4, 4],
  [3, 3, 6],
  [2, 2, 8],
  [1, 2, 9]
];

function RowEl(props) {
  return (
    <div className={`txt-s grid mb18 ${props.gutter ? props.gutter : ''}`}>
      {props.combo.map((c, i) => <div key={i} className={`col col--${c}`}>
        <div className='border px3 py3'>col--{c}</div>
      </div>)}
    </div>
  );
}

function RowElWithLeftMargin(props) {
  return (
    <div className='txt-s grid mb18'>
      {props.combo.map((c, i) => <div key={i} className={`col col--${i === 1 ? 'offl' : '' }${c}`}>
        {i === 1 ? '' : <div className='border px3 py3'>col--{c}</div>}
      </div>)}
    </div>
  );
}

function RowElWithRightMargin(props) {
  return (
    <div className='txt-s grid mb18'>
      {props.combo.map((c, i) => <div key={i} className={`col col--${i === 1 ? 'offr' : '' }${c}`}>
        {i === 1 ? '' : <div className='border px3 py3'>col--{c}</div>}
      </div>)}
    </div>
  );
}

class Grids extends React.Component {
  render() {

    const GridEls = sizeCombos.map((combo, i) => {
      return <RowEl key={i} combo={combo} />;
    });

    const GridElsWithGutters = sizeCombos.map((combo, i) => {
      return <RowEl key={i} gutter='grid--gut24' combo={combo} />;
    });

    const GridElsWithLeftMargin = sizeCombos.map((combo, i) => {
      return <RowElWithLeftMargin key={i} combo={combo} withMargin={true} />;
    });

    const GridElsWithRightMargin = sizeCombos.map((combo, i) => {
      return <RowElWithRightMargin key={i} combo={combo} withMargin={true} />;
    });

    return (
      <div>
        <h2 className='border-b border--2 border--gray-faint pb6 mt60 mb24 txt-l txt-bold'>
          Grid
        </h2>

        <h3 className='mb12 txt-m txt-bold color-darken50 txt-uppercase txt-s'>Standard grid</h3>
        {GridEls}

        <h3 className='mb12 mt60 txt-m txt-bold color-darken50 txt-uppercase txt-s'>Grid with gutters</h3>
        {GridElsWithGutters}

        <h3 className='mb12 mt60 txt-m txt-bold color-darken50 txt-uppercase txt-s'>Grid with left offset</h3>
        {GridElsWithLeftMargin}

        <h3 className='mb12 mt60 txt-m txt-bold color-darken50 txt-uppercase txt-s'>Grid with right offset</h3>
        {GridElsWithRightMargin}

        <h3 className='mb12 mt60 txt-m txt-bold color-darken50 txt-uppercase txt-s'>Grids only on large screens</h3>
        <div className='txt-s grid-ml grid--gut24-ml mb18'>
          <div className='col-ml col--6-ml'>
            <div className='border px3 py3'>col--6-ml</div>
          </div>
          <div className='col-ml col--3-ml'>
            <div className='border px3 py3'>col--3-ml</div>
          </div>
          <div className='col-ml col--3-ml'>
            <div className='border px3 py3'>col--3-ml</div>
          </div>
        </div>
      </div>
    );
  }
}

export { Grids };
