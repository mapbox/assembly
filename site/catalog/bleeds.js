import React from 'react';

export class Bleeds extends React.Component {
  render() {
    return (
      <div>
        <h2 className="border-b border-b--2 border--gray-faint pb6 mt60 mb24 txt-l txt-bold">
          Bleeds
        </h2>

        <div className="bg-darken10 flex-parent flex-parent--center-main overflow-hidden">
          <div className="w240 px12 py12 bg-darken10">
            <div className="bg-darken10 bleed-r">Right bleed</div>
          </div>
        </div>
        <div className="bg-darken10 flex-parent flex-parent--center-main overflow-hidden">
          <div className="w240 px12 py12 bg-darken10">
            <div className="bg-darken10 bleed-l align-r">Left bleed</div>
          </div>
        </div>
        <div className="bg-darken10 flex-parent flex-parent--center-main overflow-hidden">
          <div className="w240 px12 py12 bg-darken10">
            <div className="bg-darken10 bleed-r-mxl">Right bleed at xl</div>
          </div>
        </div>
        <div className="bg-darken10 flex-parent flex-parent--center-main overflow-hidden">
          <div className="w240 px12 py12 bg-darken10">
            <div className="bg-darken10 bleed-r unbleed-mxl">
              Right bleed until xl
            </div>
          </div>
        </div>
      </div>
    );
  }
}
