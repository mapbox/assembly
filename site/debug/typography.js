import React from 'react';

class Typography extends React.Component {
  render() {
    return (
      <div className='grd grd--gut10'>
        <div className='col col--6 prose'>
          <h1>Inceptos Nullam Venenatis</h1>
          <p>Aenean lacinia bibendum nulla sed consectetur. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec ullamcorper nulla non metus auctor fringilla.</p>

          <ul>
            <li>Nullam quis risus eget urna mollis ornare vel eu leo.</li>
            <li>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</li>
            <li>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</li>
          </ul>

          <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas faucibus mollis interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>

          <h2>Sit Nullam Elit</h2>

          <small>Nulla vitae elit libero, a pharetra augue. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</small>

          <blockquote>Cras mattis consectetur purus sit amet fermentum.</blockquote>

          <p>Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>

          <h3>Sit Nullam Elit</h3>

          <h3><em>Sit Nullam Elit</em></h3>

        </div>


        {/* without prose class, should be identical. Note i added a bunch of placeholder margin classes because these are still subject to change */}
        <div className='col col--6'>

          {/* note there is no top margin here, on the first element in the container */}
          <div className='txt-headline txt-bold mb20'>Inceptos Nullam Venenatis</div>
          <div className='txt-m mb15'>Aenean lacinia bibendum nulla sed consectetur. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec ullamcorper nulla non metus auctor fringilla.</div>

          <div className='txt-ul mb20'>
            <div className='txt-li mb10'>Nullam quis risus eget urna mollis ornare vel eu leo.</div>
            <div className='txt-li mb10'>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</div>
            <div className='txt-li mb10'>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</div>
          </div>

          <div className='txt-m mb20'>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas faucibus mollis interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id dolor id nibh ultricies vehicula ut id elit.</div>

          <div className='txt-subhead txt-bold mt40 mb15'>Sit Nullam Elit</div>

          <div className='txt-s mb10'>Nulla vitae elit libero, a pharetra augue. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</div>

          <div className='txt-blockquote mb20'>Cras mattis consectetur purus sit amet fermentum.</div>

          <div className='txt-m mb20'>Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</div>

          <div className='txt-xl txt-bold mb20 mt40'>Sit Nullam Elit</div>

          {/* note there is no bottom margin here, on the final element in the container */}
          <div className='txt-xl mb20 mt40 txt-bold em'>Sit Nullam Elit</div>

        </div>
      </div>
    );
  }
}

export { Typography };
