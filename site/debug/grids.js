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
    <div className={`txt-s txt-mono grid mb18 ${props.gutter ? props.gutter : ''}`}>
      {props.combo.map((c, i) => <div key={i} className={`col col--${c}`}>
        <div className='border'>col--{c}</div>
      </div>)}
    </div>
  );
}

function RowElWithLeftMargin(props) {
  return (
    <div className='txt-s txt-mono grid mb18'>
      {props.combo.map((c, i) => <div key={i} className={`col col--${i === 1 ? 'offl' : '' }${c}`}>
        {i === 1 ? '' : <div className='border'>col--{c}</div>}
      </div>)}
    </div>
  );
}

function RowElWithRightMargin(props) {
  return (
    <div className='txt-s txt-mono grid mb18'>
      {props.combo.map((c, i) => <div key={i} className={`col col--${i === 1 ? 'offr' : '' }${c}`}>
        {i === 1 ? '' : <div className='border'>col--{c}</div>}
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
        <h1 className='txt-headline mb18'>
          Grid
        </h1>

        <h2 className='mb12 mt24 txt-l txt-uppercase txt-bold'>Standard grid</h2>
        {GridEls}

        <h2 className='mb12 mt24 txt-l txt-uppercase txt-bold'>Grid with gutters</h2>
        {GridElsWithGutters}

        <h2 className='mb12 mt24 txt-l txt-uppercase txt-bold'>Grid with left offset</h2>
        {GridElsWithLeftMargin}

        <h2 className='mb12 mt24 txt-l txt-uppercase txt-bold'>Grid with right offset</h2>
        {GridElsWithRightMargin}
      </div>
    );
  }
}

export { Grids };
