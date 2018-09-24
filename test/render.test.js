import mockery from 'mockery';
import React from 'react';
import ReactDOM from 'react-dom';
import { configure } from 'enzyme';
import SkillsList from '../src/skills-list';
import FooterBottom from '../src/footer-bottom';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
const div = document.createElement('root');

describe('List of Components renders without crashing, such as', () => {
    it('SkillsList', () => {
        ReactDOM.render(<SkillsList />, div);
    });

    it('FooterBottom', () => {
        ReactDOM.render(<FooterBottom />, div);
    });
});
