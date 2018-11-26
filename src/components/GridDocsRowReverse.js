export default function (props) {
  const { color } = props;

  return `
  <div class="container">
    <div class="sub-container">
      <h4>Row Normal</h4>
      <div class="b-row" style="outline: 2px solid ${color.highlight}; outline-offset: -2px;">
        <div class="b-col b-col--3">
          <div>
            <span class="badge">First</span>
          </div>
        </div>
        <div class="b-col b-col--3">
          <div>
            <span class="badge">Second</span>
          </div>
        </div>
        <div class="b-col b-col--3">
          <div>
            <span class="badge">Third</span>
          </div>
        </div>
        <div class="b-col b-col--3">
          <div>
            <span class="badge">Fourth</span>
          </div>
        </div>
      </div>
      <h4>Row Reverse</h4>
      <div class="b-row b-row--reverse" style="outline: 2px solid ${color.highlight}; outline-offset: -2px;">
        <div class="b-col b-col--3">
          <div>
            <span class="badge">First</span>
          </div>
        </div>
        <div class="b-col b-col--3">
          <div>
            <span class="badge">Second</span>
          </div>
        </div>
        <div class="b-col b-col--3">
          <div>
            <span class="badge">Third</span>
          </div>
        </div>
        <div class="b-col b-col--3">
          <div>
            <span class="badge">Fourth</span>
          </div>
        </div>
      </div>
      <div class="code">
<xmp><div class="b-row b-row--reverse">
  ...
</div></xmp>
      </div>
    </div>
  </div>
  `;
}
