import { isStringNode, isTagNode } from '@bbob/plugin-helper';
import TagNode from '@bbob/plugin-helper/lib/TagNode';
import reactPreset from "@bbob/preset-react";

//Bbob's code
const getUniqAttr = attrs => Object
  .keys(attrs)
  .reduce((res, key) => (attrs[key] === key ? attrs[key] : null), null);

//My code
const revPreset = reactPreset.extend((tags, options) => ({
  color: node => ({
      tag: 'span',
      attrs: {
          style: {'color': getUniqAttr(node.attrs)},
      },
      content: node.content,
  }),
  size: node => ({
      tag: 'span',
      attrs: {
          style: {'fontSize': getUniqAttr(node.attrs)},
      },
      content: node.content,
  })
}));

export default revPreset;
