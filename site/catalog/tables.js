import React from 'react';

class Tables extends React.Component {
  render() {
    return (
      <div>
        <h2 className='mb24 border-b border--2 border--gray-faint pb6 mt60 txt-l txt-bold'>
          Tables
        </h2>
        <div className='grid grid--gut12'>
          <div className='col col--4'>
            <div className='mb12 txt-bold color-darken50 txt-uppercase txt-s'>Unstyled</div>
            <table>
              <thead>
                <tr>
                  <th>Column 1</th>
                  <th>Column 1</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>item</td>
                  <td>item</td>
                </tr>
                <tr>
                  <td>item</td>
                  <td>item</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className='col col--4'>
            <div className='mb12 txt-bold color-darken50 txt-uppercase txt-s'>Classed</div>
            <table className='table mb18'>
              <thead>
                <tr>
                  <th>Column 1</th>
                  <th>Column 1</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>item</td>
                  <td>item</td>
                </tr>
                <tr>
                  <td>item</td>
                  <td>item</td>
                </tr>
              </tbody>
            </table>

            <table className='table mb18'>
              <tbody>
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
              </tbody>
            </table>

            <div className='bg-gray-dark px12 py12'>
              <table className='table table--dark mb18'>
                <thead>
                  <tr>
                    <th>Column 1</th>
                    <th>Column 1</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>item</td>
                    <td>item</td>
                  </tr>
                  <tr>
                    <td>item</td>
                    <td>item</td>
                  </tr>
                </tbody>
              </table>

              <table className='table table--dark'>
                <tbody>
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
                </tbody>
              </table>
            </div>
          </div>

          <div className='col col--4 prose'>
            <div className='mb12 txt-bold color-darken50 txt-uppercase txt-s'>Inside prose</div>
            <table>
              <thead>
                <tr>
                  <th>Column 1</th>
                  <th>Column 1</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>item</td>
                  <td>item</td>
                </tr>
                <tr>
                  <td>item</td>
                  <td>item</td>
                </tr>
              </tbody>
            </table>

            <table>
              <tbody>
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
              </tbody>
            </table>

            <div className='bg-gray-dark px12 py12'>
              <table className='table--dark'>
                <thead>
                  <tr>
                    <th>Column 1</th>
                    <th>Column 1</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>item</td>
                    <td>item</td>
                  </tr>
                  <tr>
                    <td>item</td>
                    <td>item</td>
                  </tr>
                </tbody>
              </table>

              <table className='table--dark'>
                <tbody>
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
                </tbody>
              </table>
            </div>
        </div>
      </div>
    </div>
    );
  }
}

export { Tables };
