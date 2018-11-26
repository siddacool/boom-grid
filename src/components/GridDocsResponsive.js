export default function () {
  return `
  <div class="container">
    <div class="sub-container">
      <h4>Column Responsive <p>(resize your browser)</p></h4>
      <div class="b-row">
        <div class="b-col b-col--12 b-col--sm-6 b-col--md-4 b-col--lg-3 b-col--xl-1 b-col--xl-offset-right-2">
          <div>
            <span class="badge">Boom</span>
          </div>
        </div>
        <div class="b-col b-col--12 b-col--sm-6 b-col--md-4 b-col--lg-3 b-col--xl-1 b-col--xl-offset-right-2">
          <div>
            <span class="badge">Boom</span>
          </div>
        </div>
        <div class="b-col b-col--12 b-col--sm-6 b-col--md-4 b-col--lg-3 b-col--xl-1 b-col--xl-offset-right-2">
          <div>
            <span class="badge">Boom</span>
          </div>
        </div>
        <div class="b-col b-col--12 b-col--sm-6 b-col--md-4 b-col--lg-3 b-col--xl-1">
          <div>
            <span class="badge">Boom</span>
          </div>
        </div>
      </div>
      <div class="code">
<xmp>...
  <div class="b-col b-col--12 b-col--sm-6 b-col--md-4 b-col--lg-3 b-col--xl-1 b-col--xl-offset-right-2">...</div>
  <div class="b-col b-col--12 b-col--sm-6 b-col--md-4 b-col--lg-3 b-col--xl-1">...</div>
  ...
...

// .b-col--sm-*
// .b-col--md-*
// .b-col--lg-*
// .b-col--xl-*

// b-col--sm-offset-right-*
// b-col--sm-offset-left-*

// * 
//  0 to 12
// auto
</xmp>
      </div>
    </div>
  </div>
  `;
}
