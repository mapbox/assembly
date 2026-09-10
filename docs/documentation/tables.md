# Tables

Use tables to display tabular data.

## Apply standard table styling

<p class="txt-mono">`.table`</p>

Apply standard table styling.

```example
<table class='table'>
  <thead>
    <tr>
      <th>Malesuada Tristique Commodo</th>
      <th>Nibh Commodo</th>
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
```

## Invert a table's colors so it is legible against a dark background

Invert a table's colors so it is legible against a dark background.

```example
<div class='bg-darken75 px12 py12'>
  <table class='table table--dark'>
    <thead>
      <tr>
        <th>Malesuada Tristique Commodo</th>
        <th>Nibh Commodo</th>
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
```

## Any columns whose widths are *not* specified (by their top cells) will be equally distributed across the available space

Any columns whose widths are *not* specified (by their top cells) will be equally distributed across the available space.

```example
<table class='table table--fixed'>
  <thead>
    <tr>
      <th>Malesuada Tristique Commodo</th>
      <th>Nibh Commodo</th>
      <th class='w240'>Fusce</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Fusce</td>
      <td>Curabitur blandit tempus porttitor.</td>
      <td>Aenean Adipiscing</td>
    </tr>
    <tr>
      <td>Donec ullamcorper nulla non metus auctor fringilla. Maecenas faucibus mollis interdum.</td>
      <td>Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam quis risus eget urna mollis ornare vel eu leo.</td>
      <td>Cras Inceptos Purus</td>
    </tr>
  </tbody>
</table>
```
