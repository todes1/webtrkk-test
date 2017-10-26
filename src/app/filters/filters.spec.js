import FiltersModule from './filters.module';

describe('filters', () => {
let $ageFilter, $genderFilter;

    beforeEach(() => {
        window.module(FiltersModule);
    });

    beforeEach(inject(($filter) => {
        $ageFilter = $filter('ageFilter');
        $genderFilter = $filter('genderFilter');
    }));

    it('should return the age', () => {
        const birthday = '1987-05-09';
        const age = $ageFilter(birthday);
        expect(age).toBe(30)
    });

    it('should return the gender by the letters (m | w)', () => {
        expect($genderFilter('m')).toBe('Male');
        expect($genderFilter('F')).toBe('Female');
    });

});
