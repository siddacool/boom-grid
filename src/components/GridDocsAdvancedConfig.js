const tableData = [
  {
    variable: '$b-grid-base-size',
    description: 'Base unit value for spacing.',
    valueAccepted: 'Numeric values without "px" (8, 10, 12)',
    valueDefault: '8',
  },
  {
    variable: '$b-grid-gutter-size',
    description: 'Column left and right padding.',
    valueAccepted: 'Value in px (8px, 16px, 24px)',
    valueDefault: '16px',
  },
  {
    variable: '$b-grid-breakpoint-sm',
    description: 'Breakpoint Small',
    valueAccepted: 'Value in px (576px, 640px)',
    valueDefault: '576px',
  },
  {
    variable: '$b-grid-breakpoint-md',
    description: 'Breakpoint Medium',
    valueAccepted: 'Value in px (768px, 640px)',
    valueDefault: '768px',
  },
  {
    variable: '$b-grid-breakpoint-lg',
    description: 'Breakpoint Large',
    valueAccepted: 'Value in px (768px, 992px)',
    valueDefault: '992px',
  },
  {
    variable: '$b-grid-breakpoint-xl',
    description: 'Breakpoint Large',
    valueAccepted: 'Value in px (1200px, 1400px)',
    valueDefault: '1200px',
  },
];

function makeTd(tdData, shrink = false) {
  return `
    <div class="b-col b-col--12 ${shrink ? 'b-col--md-2' : 'b-col--md-auto'} td">
      ${tdData}
    </div>
  `;
}

function makeTr(trData) {
  const {
    variable,
    description,
    valueAccepted,
    valueDefault,
  } = trData;

  return `
    <div class="b-row tr">
      ${makeTd(variable)}
      ${makeTd(description)}
      ${makeTd(valueAccepted)}
      ${makeTd(valueDefault, true)}
    </div>
  `;
}

export default function () {
  return `
  <div class="container">
    <div class="sub-container">
      <h4>Advanced Config</h4>
      <p>Override default variables using sass</p>
      <div class="table">
        <div class="thead">
          <div class="b-row tr">
            <div class="b-col b-col--12 b-col--md-auto td">
              Variable
            </div>
            <div class="b-col b-col--12 b-col--md-auto td">
              Description
            </div>
            <div class="b-col b-col--12 b-col--md-auto td">
              Values accepted
            </div>
            <div class="b-col b-col--12 b-col--md-2 td">
              Default Value
            </div>
          </div>
        </div>
        <div class="tbody">
          ${tableData.map(tr => makeTr(tr)).join('')}
        </div>
      </div>
      <div class="code">
<xmp>...
// .scss

$b-grid-base-size: 10 !default;
$b-grid-gutter-size: 30px !default;
...
</xmp>
      </div>
    </div>
  </div>
  `;
}
