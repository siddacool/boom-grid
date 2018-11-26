function colAppend(size = 1, total = 12) {
  const toReturn = [];

  for (let i = 0; i < total; i++) {
    toReturn.push(`
      <div class="b-col b-col--${size}">
        <div>
          <span class="badge badge--round">${i + 1}</span>
        </div>
      </div>
    `);
  }

  return toReturn.join('');
}

export default function (props) {
  const { color } = props;

  return `
  <div class="container">
    <div class="sub-container">
      <h4>Rows</h4>
      <div class="b-row" style="outline: 4px solid ${color.highlight}; outline-offset: -2px;">
        ${colAppend(1, 12)}
      </div>
      <div class="code">
<xmp><div class="b-row">
  ...
</div>
</xmp>
      </div>
      <h4>Columns</h4>
      <div class="b-row">
        <div class="b-col b-col--4" 
        style="outline: 4px solid ${color.highlight}; position: relative;">
          <div>
            <span class="badge badge--round">4</span>
          </div>
        </div>
      </div>
      <div class="code">
<xmp>...
  <div class="b-col">...</div>
...
</xmp>
      </div>
    </div>
  </div>
  `;
}
