import React from 'react';

export class Typography extends React.Component {
  render() {
    return (
      <div>
        <h2 className="border-b border--2 border--gray-faint pb6 mt60 mb24 txt-l txt-bold">
          Typography
        </h2>
        <div className="grid grid--gut12">
          <div className="mb18 col col--6 txt-m txt-bold color-darken50 txt-uppercase txt-s">
            Styled with prose
          </div>
          <div className="mb18 col col--6 txt-m txt-bold color-darken50 txt-uppercase txt-s">
            Styled with classes
          </div>
        </div>
        <div className="grid grid--gut12">
          <div className="col col--6 prose">
            <h1>Aenean Elit Parturient Malesuada Euismod</h1>
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Morbi leo risus,
              porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus
              ac cursus commodo, tortor mauris condimentum nibh, ut fermentum
              massa justo sit amet risus. Donec ullamcorper nulla non metus
              auctor fringilla.
            </p>

            <h4>Sollicitudin Inceptos Ullamcorper Lorem</h4>

            <ul>
              <li>Nullam quis risus eget urna mollis ornare vel eu leo.</li>
              <li>
                Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                auctor.
              </li>
              <li>
                Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                venenatis vestibulum.
              </li>
            </ul>

            <p>
              Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel
              eu leo. Maecenas faucibus mollis interdum. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id
              dolor id nibh ultricies vehicula ut id elit.
            </p>

            <h2>Sit Nullam Elit</h2>

            <small>
              Nulla vitae elit libero, a pharetra augue. Fusce dapibus, tellus
              ac cursus commodo, tortor mauris condimentum nibh, ut fermentum
              massa justo sit amet risus.
            </small>

            <blockquote>
              Cras mattis consectetur purus sit amet fermentum.
            </blockquote>

            <img src="http://placehold.it/800" />

            <p>
              Cras mattis consectetur purus sit amet fermentum. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et. Fusce dapibus,
              tellus ac cursus commodo, tortor mauris condimentum nibh, ut
              fermentum massa justo sit amet risus.
            </p>

            <h3>Sit Nullam Elit</h3>

            <h3>
              <em>Sit Nullam Elit</em>
            </h3>
          </div>

          {/* without prose class, should be identical. Note i added a bunch of placeholder margin classes because these are still subject to change */}
          <div className="col col--6">
            {/* note there is no top margin here, on the first element in the container */}
            <div className="txt-h1 txt-bold mb12">
              Aenean Elit Parturient Malesuada Euismod
            </div>
            <div className="txt-m mb12">
              Aenean lacinia bibendum nulla sed consectetur. Morbi leo risus,
              porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus
              ac cursus commodo, tortor mauris condimentum nibh, ut fermentum
              massa justo sit amet risus. Donec ullamcorper nulla non metus
              auctor fringilla.
            </div>

            <div className="txt-h4 txt-bold pt18 mb12">
              Sollicitudin Inceptos Ullamcorper Lorem
            </div>
            <div className="txt-ul ml24 mb12">
              <div className="txt-li mb6">
                Nullam quis risus eget urna mollis ornare vel eu leo.
              </div>
              <div className="txt-li mb6">
                Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                auctor.
              </div>
              <div className="txt-li">
                Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                venenatis vestibulum.
              </div>
            </div>

            <div className="txt-m mb12">
              Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel
              eu leo. Maecenas faucibus mollis interdum. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id
              dolor id nibh ultricies vehicula ut id elit.
            </div>

            <div className="txt-h2 txt-bold pt24 mb12">Sit Nullam Elit</div>

            <div className="txt-s mb12">
              Nulla vitae elit libero, a pharetra augue. Fusce dapibus, tellus
              ac cursus commodo, tortor mauris condimentum nibh, ut fermentum
              massa justo sit amet risus.
            </div>

            <div className="txt-blockquote mb18">
              Cras mattis consectetur purus sit amet fermentum.
            </div>

            <img className="mb12" src="http://placehold.it/800" />

            <div className="txt-m mb12">
              Cras mattis consectetur purus sit amet fermentum. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et. Fusce dapibus,
              tellus ac cursus commodo, tortor mauris condimentum nibh, ut
              fermentum massa justo sit amet risus.
            </div>

            <div className="txt-h3 txt-bold mb12 pt24">Sit Nullam Elit</div>

            {/* note there is no bottom margin here, on the final element in the container */}
            <div className="txt-h3 pt24 txt-bold txt-em">Sit Nullam Elit</div>
          </div>
        </div>
      </div>
    );
  }
}
