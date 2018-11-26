export default function (props) {
  const { color } = props;

  return `
  <div class="container">
    <div class="sub-container">
      <h4>Row Justify <p>(Horizontal Alignment)</p></h4>
      <div class="b-row b-row--justify-start" style="outline: 2px solid ${color.highlight}; outline-offset: -2px;">
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
      <div class="b-row b-row--justify-center" style="outline: 2px solid ${color.highlight}; outline-offset: -2px;">
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
      <div class="b-row b-row--justify-end" style="outline: 2px solid ${color.highlight}; outline-offset: -2px;">
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
      <div class="b-row b-row--justify-around" style="outline: 2px solid ${color.highlight}; outline-offset: -2px;">
        <div class="b-col b-col--2">
          <div>
            <span class="badge">Around</span>
          </div>
        </div>
        <div class="b-col b-col--2">
          <div>
            <span class="badge">Around</span>
          </div>
        </div>
        <div class="b-col b-col--2">
          <div>
            <span class="badge">Around</span>
          </div>
        </div>
      </div>
      <div class="b-row b-row--justify-between" style="outline: 2px solid ${color.highlight}; outline-offset: -2px;">
        <div class="b-col b-col--2">
          <div>
            <span class="badge">Between</span>
          </div>
        </div>
        <div class="b-col b-col--2">
          <div>
            <span class="badge">Between</span>
          </div>
        </div>
        <div class="b-col b-col--2">
          <div>
            <span class="badge">Between</span>
          </div>
        </div>
      </div>
      <div class="code">
<xmp><div class="b-row b-row--justify-start">
  ...
</div>

<div class="b-row b-row--justify-center">
  ...
</div>

<div class="b-row b-row--justify-end">
  ...
</div>

<div class="b-row b-row--justify-around">
  ...
</div>

<div class="b-row b-row--justify-between">
  ...
</div>

// .b-row--justify-*

// * 
// start
// center
// end
// around
// between
</xmp>
      </div>
    </div>
  </div>
  `;
}
