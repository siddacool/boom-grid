export default function () {
  return `
  <div class="container">
    <div class="sub-container">
      <h4>Column Offset</h4>
      <div class="b-row">
        <div class="b-col b-col--4 b-col--offset-right-6">
          <div>
            <span class="badge badge--round">4</span>
          </div>
        </div>
        <div class="b-col b-col--2">
          <div>
            <span class="badge badge--round">2</span>
          </div>
        </div>
        <div class="b-col b-col--6 b-col--offset-left-4 b-col--offset-right-1">
          <div>
            <span class="badge badge--round">6</span>
          </div>
        </div>
        <div class="b-col b-col--1">
          <div>
            <span class="badge badge--round">1</span>
          </div>
        </div>
      </div>
      <div class="code">
<xmp>...
  <div class="b-col b-col--4 b-col--offset-right-6">...</div>
  <div class="b-col b-col--2">...</div>
  <div class="b-col b-col--6 b-col--offset-left-4 b-col--offset-right-1">...</div>
  <div class="b-col b-col--1">...</div>
...

// .b-col--offset-right-*
// .b-col--offset-left-*

// * 
//  0 to 12
// auto
</xmp>
      </div>
    </div>
  </div>
  `;
}
