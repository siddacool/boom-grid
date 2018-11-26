export default function () {
  return `
    <div class="container intro">
      <section>
        <h1>Boom Grid</h1>
        <p>an instant 12 column grid based on flexbox. Go Boom</p>
        <article class="top-margin">
          <h4>Install</h4>
          <div class="code">
            <span>npm i boom-grid --save</span>
          </div>
        </article>
        <article>
          <h4>Use with SCSS</h4>
          <div class="code">
            <span>@import '<path>/node_modules/boom-grid/index';</span>
          </div>
        </article>
        <article>
          <h4>Or with plain old .css</h4>
          <div class="code">
            <span>@import '<path>/node_modules/boom-grid/boom-grid-css.css';</span>
          </div>
        </article>
      </section>
    </div>
  `;
}
