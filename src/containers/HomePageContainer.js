import SiteIntroduction from '../components/SiteIntroduction';
import GridDocs from '../components/GridDocs';

export default function () {
  return `
    <div class="home-container">
      ${SiteIntroduction()}
      ${GridDocs()}
    </div>
  `;
}
