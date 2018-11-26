export default function () {
  return `
  <div class="container">
    <div class="sub-container">
      <h4>Column Sizes</h4>
      <div class="b-row">
        <div class="b-col b-col--4">
          <div>
            <span class="badge badge--round">4</span>
          </div>
        </div>
        <div class="b-col b-col--2">
          <div>
            <span class="badge badge--round">2</span>
          </div>
        </div>
        <div class="b-col b-col--6">
          <div>
            <span class="badge badge--round">6</span>
          </div>
        </div>
        <div class="b-col b-col--1">
          <div>
            <span class="badge badge--round">1</span>
          </div>
        </div>
        <div class="b-col b-col--11">
          <div>
            <span class="badge badge--round">11</span>
          </div>
        </div>
      </div>
      <div class="code">
<xmp>...
  <div class="b-col b-col--4">...</div>
  <div class="b-col b-col--2">...</div>
  <div class="b-col b-col--6">...</div>
  <div class="b-col b-col--1">...</div>
  <div class="b-col b-col--11">...</div>
...

// .b-col--*

// * 
// 1 to 12
// auto
</xmp>
      </div>
    </div>
  </div>
  `;
}
