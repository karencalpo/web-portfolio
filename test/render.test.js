import React from 'react';
import ReactDOM from 'react-dom';
import { configure } from 'enzyme';
import SkillsList from '../src/skills-list';
import SkillsSummary from '../src/skills-summary';
import FooterTop from '../src/footer-top';
import FooterBottom from '../src/footer-bottom';
import Portfolio from '../src/portfolio';
import Banner from '../src/banner';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
const div = document.createElement('root');

jest.mock('../src/sites.js');

describe('Components render without crashing, such as', () => {
    it('Banner', () => {
        ReactDOM.render(<Banner />, div);
    });

    it('Portfolio', () => {
        ReactDOM.render(<Portfolio />, div);
    });

    it('SkillsList', () => {
        ReactDOM.render(<SkillsList />, div);
    });

    it('SkillsSummary', () => {
        ReactDOM.render(<SkillsSummary />, div);
    });

    it('FooterTop', () => {
        ReactDOM.render(<FooterTop />, div);
    });

    it('FooterBottom', () => {
        ReactDOM.render(<FooterBottom />, div);
    });

});
