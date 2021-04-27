import React from 'react';

export class Flexbox extends React.Component {
  render() {
    return (
      <div>
        <h2 className="border-b border-b--2 border--gray-faint pb6 mt60 mb24 txt-l txt-bold">
          Flexbox
        </h2>

        <div className="mb24">
          <div className="mb12 txt-bold color-darken50 txt-uppercase txt-s">
            Standard flex children
          </div>
          <div className="border flex">
            <div className="bg-gray-light">
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
              eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus
              auctor fringilla. Praesent commodo cursus magna, vel scelerisque
              nisl consectetur et.
            </div>
            <div className="bg-gray-faint">
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
              eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus
              auctor fringilla. Praesent commodo cursus magna, vel scelerisque
              nisl consectetur et.
            </div>
          </div>
        </div>

        <div className="mb24">
          <div className="mb12 txt-bold color-darken50 txt-uppercase txt-s">
            Set-width flex children
          </div>
          <div className="border flex">
            <div className="flex-child-no-shrink w240 bg-gray-light">
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
              eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus
              auctor fringilla. Praesent commodo cursus magna, vel scelerisque
              nisl consectetur et.
            </div>
            <div className="w360 bg-gray-faint">
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
              eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus
              auctor fringilla. Praesent commodo cursus magna, vel scelerisque
              nisl consectetur et.
            </div>
          </div>
        </div>

        <div className="mb24">
          <div className="mb12 txt-bold color-darken50 txt-uppercase txt-s">
            One set-width flex child, the other with long text
          </div>
          <div className="border flex">
            <div className="flex-child-no-shrink w240 bg-gray-light">
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
              eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus
              auctor fringilla. Praesent commodo cursus magna, vel scelerisque
              nisl consectetur et.
            </div>
            <div className="bg-gray-faint">
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
              eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus
              auctor fringilla. Praesent commodo cursus magna, vel scelerisque
              nisl consectetur et.
            </div>
          </div>
        </div>

        <div className="mb24">
          <div className="mb12 txt-bold color-darken50 txt-uppercase txt-s">
            One set-width flex child, the other with short text
          </div>
          <div className="border flex">
            <div className="flex-child-no-shrink w240 bg-gray-light">
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
              eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus
              auctor fringilla. Praesent commodo cursus magna, vel scelerisque
              nisl consectetur et.
            </div>
            <div className="bg-gray-faint">Duis mollis.</div>
          </div>
        </div>

        <div className="mb24">
          <div className="mb12 txt-bold color-darken50 txt-uppercase txt-s">
            One set-width flex child and a growing child with long text
          </div>
          <div className="border flex">
            <div className="flex-child-no-shrink w240 bg-gray-light">
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
              eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus
              auctor fringilla. Praesent commodo cursus magna, vel scelerisque
              nisl consectetur et.
            </div>
            <div className="flex-child-grow bg-gray-faint">
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
              eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus
              auctor fringilla. Praesent commodo cursus magna, vel scelerisque
              nisl consectetur et.
            </div>
          </div>
        </div>

        <div className="mb24">
          <div className="mb12 txt-bold color-darken50 txt-uppercase txt-s">
            One set-width flex child and a growing child with short text
          </div>
          <div className="border flex">
            <div className="flex-child-no-shrink w240 bg-gray-light">
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
              eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus
              auctor fringilla. Praesent commodo cursus magna, vel scelerisque
              nisl consectetur et.
            </div>
            <div className="flex-child-grow bg-gray-faint">Duis mollis.</div>
          </div>
        </div>
      </div>
    );
  }
}
