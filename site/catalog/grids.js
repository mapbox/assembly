import React from 'react';

const sizeCombos = [
  ['-full'],
  ['-11/12', '-1/12'],
  ['-5/6', '-1/6'],
  ['-3/4', '-1/4'],
  ['-2/3', '-1/3'],
  ['-7/12', '-5/12'],
  ['-1/2', '1/2'],
  ['-1/3', '-1/3', '-1/3'],
  ['-1/4', '-1/4', '-1/2'],
  ['-1/6', '-1/6', '-2/3'],
  ['-1/12', '-1/6', '-3/4']
];

function RowEl(props) {
  return (
    <div className={`txt-s grid mb18 ${props.gutter ? props.gutter : ''}`}>
      {props.combo.map((c, i) => (
        <div key={i} className={`col w${c}`}>
          <div className="border px3 py3">w{c}</div>
        </div>
      ))}
    </div>
  );
}

function RowElWithLeftMargin(props) {
  return (
    <div className="txt-s grid mb18">
      {props.combo.map((c, i) => (
        <div key={i} className={`col ${i === 1 ? 'ml' : 'w'}${c}`}>
          {i === 1 ? '' : <div className="border px3 py3">w{c}</div>}
        </div>
      ))}
    </div>
  );
}

function RowElWithRightMargin(props) {
  return (
    <div className="txt-s grid mb18">
      {props.combo.map((c, i) => (
        <div key={i} className={`col ${i === 1 ? 'mr' : 'w'}${c}`}>
          {i === 1 ? '' : <div className="border px3 py3">w{c}</div>}
        </div>
      ))}
    </div>
  );
}

export class Grids extends React.Component {
  render() {
    const GridEls = sizeCombos.map((combo, i) => {
      return <RowEl key={i} combo={combo} />;
    });

    const GridElsWithGutters = sizeCombos.map((combo, i) => {
      return <RowEl key={i} gutter="grid--gut24" combo={combo} />;
    });

    const GridElsWithLeftMargin = sizeCombos.map((combo, i) => {
      return <RowElWithLeftMargin key={i} combo={combo} withMargin={true} />;
    });

    const GridElsWithRightMargin = sizeCombos.map((combo, i) => {
      return <RowElWithRightMargin key={i} combo={combo} withMargin={true} />;
    });

    return (
      <div>
        <h2 className="border-b border-b--2 border--gray-faint pb6 mt60 mb24 txt-l txt-bold">
          Grid
        </h2>

        <h3 className="mb12 txt-m txt-bold color-darken50 txt-uppercase txt-s">
          Uncontrolled grid
        </h3>
        <div className="txt-s grid mb18">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="col">
              <div className="border px3 py3">col</div>
            </div>
          ))}
        </div>

        <h3 className="mb12 txt-m txt-bold color-darken50 txt-uppercase txt-s">
          Standard controlled grid
        </h3>
        {GridEls}

        <h3 className="mb12 mt60 txt-m txt-bold color-darken50 txt-uppercase txt-s">
          Grid with gutters
        </h3>
        {GridElsWithGutters}

        <h3 className="mb12 mt60 txt-m txt-bold color-darken50 txt-uppercase txt-s">
          Grid with left offset
        </h3>
        {GridElsWithLeftMargin}

        <h3 className="mb12 mt60 txt-m txt-bold color-darken50 txt-uppercase txt-s">
          Grid with right offset
        </h3>
        {GridElsWithRightMargin}

        <h3 className="mb12 mt60 txt-m txt-bold color-darken50 txt-uppercase txt-s">
          Grids only on large screens
        </h3>
        <div className="txt-s grid-ml grid--gut24-ml mb18">
          <div className="col-ml w-1/2-ml">
            <div className="border px3 py3">w-1/2-ml</div>
          </div>
          <div className="col-ml w-1/4-ml">
            <div className="border px3 py3">w-1/4-ml</div>
          </div>
          <div className="col-ml w-1/4-ml">
            <div className="border px3 py3">w-1/4-ml</div>
          </div>
        </div>
      </div>
    );
  }
}
