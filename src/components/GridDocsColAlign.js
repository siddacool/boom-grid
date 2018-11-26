export default function (props) {
  const { color } = props;

  return `
  <div class="container">
    <div class="sub-container">
      <h4>Column Self Align <p>(Vertical Alignment)</p></h4>
      <div class="b-row" style="height: 160px;">
        <div class="b-col b-col--4 b-col--align-start" style="outline: 2px solid ${color.highlight};">
          <div>
            <span class="badge">Start</span>
          </div>
        </div>
        <div class="b-col b-col--4 b-col--align-center" style="outline: 2px solid ${color.highlight};">
          <div>
            <span class="badge">Center</span>
          </div>
        </div>
        <div class="b-col b-col--4 b-col--align-end" style="outline: 2px solid ${color.highlight};">
          <div>
            <span class="badge">End</span>
          </div>
        </div>
      </div>
      <div class="code">
<xmp>...
  <div class="b-col b-col--4 b-col--align-start">...</div>
  <div class="b-col b-col--4 b-col--align-center">...</div>
  <div class="b-col b-col--4 b-col--align-end">...</div>
...

// .b-col--align-*

// * 
// start
// center
// end
</xmp>
      </div>
    </div>
  </div>
  `;
}
