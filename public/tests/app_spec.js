describe('LearnJS',function(){
    it('can show aproblem view',function(){
        learnjs.showView('#problem-1');
        expect($('.view-container .problem-view').length).toEqual(1);
    });
});