export default function (props) {
  const { color } = props;

  return `
  <div class="container">
    <div class="sub-container">
      <h4>Row Align <p>(Vertical Alignment)</p></h4>
      <div class="b-row b-row--align-start" style="outline: 2px solid ${color.highlight}; outline-offset: -2px; height: 160px;">
        <div class="b-col b-col--2">
          <div>
            <span class="badge">Start</span>
          </div>
        </div>
        <div class="b-col b-col--2">
          <div>
            <span class="badge">Start</span>
          </div>
        </div>
        <div class="b-col b-col--2">
          <div>
            <span class="badge">Start</span>
          </div>
        </div>
      </div>
      <div class="b-row b-row--align-center" style="outline: 2px solid ${color.highlight}; outline-offset: -2px; height: 160px;">
        <div class="b-col b-col--2">
          <div>
            <span class="badge">Center</span>
          </div>
        </div>
        <div class="b-col b-col--2">
          <div>
            <span class="badge">Center</span>
          </div>
        </div>
        <div class="b-col b-col--2">
          <div>
            <span class="badge">Center</span>
          </div>
        </div>
      </div>
      <div class="b-row b-row--align-end" style="outline: 2px solid ${color.highlight}; outline-offset: -2px; height: 160px;">
        <div class="b-col b-col--2">
          <div>
            <span class="badge">End</span>
          </div>
        </div>
        <div class="b-col b-col--2">
          <div>
            <span class="badge">End</span>
          </div>
        </div>
        <div class="b-col b-col--2">
          <div>
            <span class="badge">End</span>
          </div>
        </div>
      </div>
      <div class="code">
<xmp><div class="b-row b-row--align-start">
  ...
</div>

<div class="b-row b-row--align-center">
  ...
</div>

<div class="b-row b-row--align-end">
  ...
</div>

// .b-row--align-*

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
