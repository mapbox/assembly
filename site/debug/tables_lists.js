import React from 'react';

class TablesLists extends React.Component {
  render() {
    return (
      <div>
        <h1 className='txt-headline mb20'>
          Tables & Lists
        </h1>
        <div className='grid grid--gut10'>
          <div className='col col--4'>
            Unstyled
            <table>
              <thead>
                <tr>
                  <th>Column 1</th>
                  <th>Column 1</th>
                </tr>
              </thead>
              <tr>
                <td>item</td>
                <td>item</td>
              </tr>
              <tr>
                <td>item</td>
                <td>item</td>
              </tr>
            </table>

            <table>
              <tr>
                <th>Row 1</th>
                <td>item</td>
                <td>item</td>
              </tr>
              <tr>
                <th>Row 2</th>
                <td>item</td>
                <td>item</td>
              </tr>
              <tr>
                <th>Row 3</th>
                <td>item</td>
                <td>item</td>
              </tr>
            </table>
            <h2>Unordered</h2>
            <ul>
              <li>Unordered list item</li>
              <li>Unordered list item
                <ol>
                  <li>Ordered child</li>
                  <li>Ordered child</li>
                </ol>
              </li>
              <li>Unordered list item</li>
              <li>Unordered list item
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
              <li>Ordered list item
                <ol>
                  <li>Ordered child</li>
                  <li>Ordered child</li>
                </ol>
              </li>
              <li>Ordered list item</li>
              <li>Ordered list item
                <ul>
                  <li>Unordered child</li>
                  <li>Unordered child
                    <ul>
                      <li>Unordered child</li>
                      <li>Unordered child</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>Ordered list item</li>
            </ol>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>

          <div className='col col--4'>
            tbl + txt-ol/ul
            <table className='tbl'>
              <thead>
                <tr>
                  <th>Column 1</th>
                  <th>Column 1</th>
                </tr>
              </thead>
              <tr>
                <td>item</td>
                <td>item</td>
              </tr>
              <tr>
                <td>item</td>
                <td>item</td>
              </tr>
            </table>

            <table className="tbl">
              <tr>
                <th>Row 1</th>
                <td>item</td>
                <td>item</td>
              </tr>
              <tr>
                <th>Row 2</th>
                <td>item</td>
                <td>item</td>
              </tr>
              <tr>
                <th>Row 3</th>
                <td>item</td>
                <td>item</td>
              </tr>
            </table>
            <h2 className='txt-h2'>Unordered (with classes)</h2>
            <ul className='txt-ul'>
              <li className='txt-li'>Unordered list item</li>
              <li className='txt-li'>Unordered list item
                <ol className='txt-ol'>
                  <li className='txt-li'>Ordered child</li>
                  <li className='txt-li'>Ordered child</li>
                </ol>
              </li>
              <li className='txt-li'>Unordered list item</li>
              <li className='txt-li'>Unordered list item
                <ul className='txt-ul'>
                  <li className='txt-li'>Unordered child</li>
                  <li className='txt-li'>Unordered child</li>
                </ul>
              </li>
              <li className='txt-li'>Unordered list item</li>
            </ul>
            <h2 className='txt-h2'>Ordered (with classes)</h2>
            <ol className='txt-ol'>
              <li className='txt-li'>Ordered list item</li>
              <li className='txt-li'>Ordered list item
                <ol className='txt-ol'>
                  <li className='txt-li'>Ordered child</li>
                  <li className='txt-li'>Ordered child</li>
                </ol>
              </li>
              <li className='txt-li'>Ordered list item</li>
              <li className='txt-li'>Ordered list item
                <ul className='txt-ul'>
                  <li className='txt-li'>Unordered child</li>
                  <li className='txt-li'>Unordered child
                    <ul className='txt-ul'>
                      <li className='txt-li'>Unordered child</li>
                      <li className='txt-li'>Unordered child</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>Ordered list item</li>
            </ol>
            <p className='txt-p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>

          <div className='col col--4 prose'>
            txt
            <table>
              <thead>
                <tr>
                  <th>Column 1</th>
                  <th>Column 1</th>
                </tr>
              </thead>
              <tr>
                <td>item</td>
                <td>item</td>
              </tr>
              <tr>
                <td>item</td>
                <td>item</td>
              </tr>
            </table>

            <table>
              <tr>
                <th>Row 1</th>
                <td>item</td>
                <td>item</td>
              </tr>
              <tr>
                <th>Row 2</th>
                <td>item</td>
                <td>item</td>
              </tr>
              <tr>
                <th>Row 3</th>
                <td>item</td>
                <td>item</td>
              </tr>
            </table>
            <h2>Unordered</h2>
            <ul>
              <li>Unordered list item</li>
              <li>Unordered list item
                <ol>
                  <li>Ordered child</li>
                  <li>Ordered child</li>
                </ol>
              </li>
              <li>Unordered list item</li>
              <li>Unordered list item
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
              <li>Ordered list item
                <ol>
                  <li>Ordered child</li>
                  <li>Ordered child</li>
                </ol>
              </li>
              <li>Ordered list item</li>
              <li>Ordered list item
                <ul>
                  <li>Unordered child</li>
                  <li>Unordered child
                    <ul>
                      <li>Unordered child</li>
                      <li>Unordered child</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>Ordered list item</li>
            </ol>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </div>
    );
  }
}

export { TablesLists };
