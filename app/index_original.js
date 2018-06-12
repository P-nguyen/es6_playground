import { addHeader, addParagraph } from './helpers';
import add, { multiply } from './add';

addHeader('This function is from a different file!!! ZOMG');
addHeader(`54 + 67 = ${add(54,67)}`);
addParagraph('This is a paragraph!!!! theres not enough !');