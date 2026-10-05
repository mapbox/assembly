<template>
  <div>
    <h2 class="mb24 border-b border-b--2 border--gray-faint pb6 mt60 txt-l txt-bold">
      Tables
    </h2>
    <div class="grid grid--gut12">
      <div class="col w-1/3">
        <div class="mb12 txt-bold color-darken50 txt-uppercase txt-s">Unstyled</div>
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
      <div class="col w-1/3">
        <div class="mb12 txt-bold color-darken50 txt-uppercase txt-s">Classed</div>
        <table class="table mb18">
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
        <table class="table mb18">
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
        <div class="bg-gray-dark px12 py12">
          <table class="table table--dark mb18">
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
          <table class="table table--dark">
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
      <div class="col w-1/3 prose">
        <div class="mb12 txt-bold color-darken50 txt-uppercase txt-s">
          Inside prose
        </div>
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
        <div class="bg-gray-dark px12 py12">
          <table class="table--dark">
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
          <table class="table--dark">
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
</template>
