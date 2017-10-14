import React from 'react';

export class Lists extends React.Component {
  render() {
    return (
      <div>
        <h2 className="mb24 border-b border-b--2 border--gray-faint pb6 mt60 txt-l txt-bold">
          Lists
        </h2>
        <div className="grid grid--gut12">
          <div className="col col--4">
            <div className="mb12 txt-bold color-darken50 txt-uppercase txt-s">
              unstyled
            </div>
            <h2>Unordered</h2>
            <ul>
              <li>Unordered list item</li>
              <li>
                Unordered list item
                <ol>
                  <li>Ordered child</li>
                  <li>Ordered child</li>
                </ol>
              </li>
              <li>Unordered list item</li>
              <li>
                Unordered list item
                <ul>
                  <li>Unordered child</li>
                  <li>Unordered child</li>
                </ul>
              </li>
              <li>Unordered list item</li>
            </ul>
            <h2>Ordered</h2>
            <ol>
              <li>Ordered list item</li>
              <li>
                Ordered list item
                <ol>
                  <li>Ordered child</li>
                  <li>Ordered child</li>
                </ol>
              </li>
              <li>Ordered list item</li>
              <li>
                Ordered list item
                <ul>
                  <li>Unordered child</li>
                  <li>
                    Unordered child
                    <ul>
                      <li>Unordered child</li>
                      <li>Unordered child</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>Ordered list item</li>
            </ol>
          </div>

          <div className="col col--4">
            <div className="mb12 txt-bold color-darken50 txt-uppercase txt-s">
              txt-ol/ul
            </div>

            <ul className="txt-ul">
              <li className="txt-li">Unordered list item</li>
              <li className="txt-li">
                Unordered list item
                <ol className="txt-ol">
                  <li className="txt-li">Ordered child</li>
                  <li className="txt-li">Ordered child</li>
                </ol>
              </li>
              <li className="txt-li">Unordered list item</li>
              <li className="txt-li">
                Unordered list item
                <ul className="txt-ul">
                  <li className="txt-li">Unordered child</li>
                  <li className="txt-li">Unordered child</li>
                </ul>
              </li>
              <li className="txt-li">Unordered list item</li>
            </ul>
            <h2 className="txt-h2">Ordered (with classes)</h2>
            <ol className="txt-ol">
              <li className="txt-li">Ordered list item</li>
              <li className="txt-li">
                Ordered list item
                <ol className="txt-ol">
                  <li className="txt-li">Ordered child</li>
                  <li className="txt-li">Ordered child</li>
                </ol>
              </li>
              <li className="txt-li">Ordered list item</li>
              <li className="txt-li">
                Ordered list item
                <ul className="txt-ul">
                  <li className="txt-li">Unordered child</li>
                  <li className="txt-li">
                    Unordered child
                    <ul className="txt-ul">
                      <li className="txt-li">Unordered child</li>
                      <li className="txt-li">Unordered child</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>Ordered list item</li>
            </ol>
          </div>

          <div className="col col--4 prose">
            <div className="mb12 txt-bold color-darken50 txt-uppercase txt-s">
              Prose
            </div>

            <h2>Unordered</h2>
            <ul>
              <li>Unordered list item</li>
              <li>
                Unordered list item
                <ol>
                  <li>Ordered child</li>
                  <li>Ordered child</li>
                </ol>
              </li>
              <li>Unordered list item</li>
              <li>
                Unordered list item
                <ul>
                  <li>Unordered child</li>
                  <li>Unordered child</li>
                </ul>
              </li>
              <li>Unordered list item</li>
            </ul>
            <h2>Ordered</h2>
            <ol>
              <li>Ordered list item</li>
              <li>
                Ordered list item
                <ol>
                  <li>Ordered child</li>
                  <li>Ordered child</li>
                </ol>
              </li>
              <li>Ordered list item</li>
              <li>
                Ordered list item
                <ul>
                  <li>Unordered child</li>
                  <li>
                    Unordered child
                    <ul>
                      <li>Unordered child</li>
                      <li>Unordered child</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>Ordered list item</li>
            </ol>
          </div>
        </div>
      </div>
    );
  }
}
