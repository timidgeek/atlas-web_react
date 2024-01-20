if (typeof TextEncoder === "undefined") {
  global.TextEncoder = require("util").TextEncoder;
};

import '@testing-library/jest-dom';
import 'jest-enzyme';
import { configure } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';

configure({ adapter: new Adapter() });