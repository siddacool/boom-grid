import GridDocsBasicGrid from './GridDocsBasicGrid';
import GridDocsRows from './GridDocsRows';
import GridDocsColSizes from './GridDocsColSizes';
import GridDocsColOffset from './GridDocsColOffset';
import GridDocsResponsive from './GridDocsResponsive';
import GridDocsRowJustify from './GridDocsRowJustify';
import GridDocsRowAlign from './GridDocsRowAlign';
import GridDocsColAlign from './GridDocsColAlign';
import GridDocsRowReverse from './GridDocsRowReverse';
import GridDocsAdvancedConfig from './GridDocsAdvancedConfig';

const docsList = [
  GridDocsBasicGrid,
  GridDocsRows,
  GridDocsColSizes,
  GridDocsColOffset,
  GridDocsResponsive,
  GridDocsRowJustify,
  GridDocsRowAlign,
  GridDocsColAlign,
  GridDocsRowReverse,
  GridDocsAdvancedConfig,
];

export default function () {
  const state = {
    color: {
      highlight: '#ff5630',
    },
  };

  return `
    ${docsList.map(doc => doc(state)).join('')}
  `;
}
