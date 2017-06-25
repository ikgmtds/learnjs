describe('LearnJS', function () {
    it('can show aproblem view', function () {
        learnjs.showView('#problem-1');
        expect($('.view-container .problem-view').length).toEqual(1);
    });
    it('show the landing page view when there is no hash', function () {
        learnjs.showView('');
        expect($('.view-container .landing-view').length).toEqual(1);
    });
    it('passes the hash view parameter to the view funtion', function () {
        spyOn(learnjs, 'problemView');
        learnjs.showView('#problem-42');
        expect(learnjs.problemView).toHaveBeenCalledWith('42');
    });

    describe('problem view', function () {
        it('has a title that includes the problem number', function () {
            var view = learnjs.problemView('1');
            expect(view.text()).toEqual('Problem #1 coming soon!');
        });
    });
});