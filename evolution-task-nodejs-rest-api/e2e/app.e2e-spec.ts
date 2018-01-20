import { EvolutionTaskNodejsMongoRestApiPage } from './app.po';

describe('evolution-task-nodejs-mongo-rest-api App', function() {
  let page: EvolutionTaskNodejsMongoRestApiPage;

  beforeEach(() => {
    page = new EvolutionTaskNodejsMongoRestApiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
