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

export default function () {
  return `
  <div class="container">
    <div class="sub-container">
      <h4>Basic Grid</h4>
      <div class="b-row">
        ${colAppend(1, 12)}
      </div>
      <div class="b-row">
        ${colAppend(2, 6)}
      </div>
      <div class="b-row">
        ${colAppend(3, 4)}
      </div>
      <div class="b-row">
        ${colAppend(4, 3)}
      </div>
      <div class="b-row">
        ${colAppend(6, 2)}
      </div>
      <div class="b-row">
        ${colAppend(12, 1)}
      </div>
      <div class="code">
<xmp><div class="b-row">
  <div class="b-col b-col--1">...</div>
  <div class="b-col b-col--1">...</div>
  <div class="b-col b-col--1">...</div>
  ...
</div>

<div class="b-row">
  <div class="b-col b-col--2">...</div>
  <div class="b-col b-col--2">...</div>
  <div class="b-col b-col--2">...</div>
  ...
</div>

<div class="b-row">
  <div class="b-col b-col--3">...</div>
  <div class="b-col b-col--3">...</div>
  <div class="b-col b-col--3">...</div>
  <div class="b-col b-col--3">...</div>
</div>

<div class="b-row">
  <div class="b-col b-col--4">...</div>
  <div class="b-col b-col--4">...</div>
  <div class="b-col b-col--4">...</div>
</div>

<div class="b-row">
  <div class="b-col b-col--6">...</div>
  <div class="b-col b-col--6">...</div>
</div>

<div class="b-row">
  <div class="b-col b-col--12">...</div>
</div></xmp>
</div>
        </div>
      </div>
  `;
}
