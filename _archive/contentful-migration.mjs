export default function(migration) {

  // ============================================================
  // AGE
  // ============================================================
  const age = migration.createContentType('age', {
    name: 'Age',
    description: 'One of the eight ages of Aevyndal history',
    displayField: 'name',
  });

  age.createField('name').name('Name').type('Symbol').required(true);
  age.createField('label').name('Label (e.g. Fourth)').type('Symbol').required(true);
  age.createField('subtitle').name('Subtitle').type('Symbol').required(true);
  age.createField('genre').name('Genre').type('Symbol').required(true);
  age.createField('era').name('Era (e.g. 659 IC – Present)').type('Symbol').required(true);
  age.createField('description').name('Description').type('Text').required(true);
  age.createField('toneStatement').name('Tone Statement').type('Symbol').required(true);
  age.createField('quote').name('Quote').type('Symbol');
  age.createField('color').name('Primary Color (hex)').type('Symbol').required(true);
  age.createField('accentColor').name('Accent Color (hex)').type('Symbol').required(true);
  age.createField('buildPercent').name('Build Percent (0-100)').type('Integer').required(true);
  age.createField('buildStatus').name('Build Status Label').type('Symbol').required(true);
  age.createField('locked').name('Locked').type('Boolean').required(true);
  age.createField('mostBuilt').name('Most Built').type('Boolean');
  age.createField('order').name('Order (1-8)').type('Integer').required(true);

  // ============================================================
  // PEOPLE
  // ============================================================
  const people = migration.createContentType('people', {
    name: 'People',
    description: 'A playable people/lineage of Aevyndal',
    displayField: 'name',
  });

  people.createField('name').name('Name').type('Symbol').required(true);
  people.createField('identityHook').name('Identity Hook (2 lines max)').type('Symbol').required(true);
  people.createField('youMight').name('You Might...').type('Text').required(true);
  people.createField('othersSee').name('Others Probably...').type('Text').required(true);
  people.createField('description').name('Description').type('Text').required(true);
  people.createField('culture').name('Culture').type('Text');
  people.createField('beliefs').name('Beliefs').type('Text');
  people.createField('portrait').name('Portrait').type('Link').linkType('Asset');
  people.createField('homeRegion').name('Home Region').type('Symbol');
  people.createField('callings').name('Suggested Callings').type('Array').items({ type: 'Symbol' });
  people.createField('ages').name('Present in Ages').type('Array').items({ type: 'Symbol' });
  people.createField('inMutvia').name('Present in Mutvia').type('Boolean');

  // ============================================================
  // QUICK START
  // ============================================================
  const quickStart = migration.createContentType('quickStart', {
    name: 'Quick Start',
    description: 'A campaign quick start path for a given age',
    displayField: 'title',
  });

  quickStart.createField('title').name('Title').type('Symbol').required(true);
  quickStart.createField('tagLine').name('Tag Line').type('Symbol').required(true);
  quickStart.createField('levelRange').name('Level Range (e.g. 1-4)').type('Symbol').required(true);
  quickStart.createField('difficulty').name('Difficulty').type('Symbol')
    .validations([{ in: ['Starter', 'Regional', 'Exploration', 'Epic'] }]);
  quickStart.createField('hook').name('Hook (one sentence)').type('Symbol').required(true);
  quickStart.createField('description').name('Description').type('Text');
  quickStart.createField('age').name('Age').type('Link').linkType('Entry')
    .validations([{ linkContentType: ['age'] }]);
  quickStart.createField('region').name('Region').type('Symbol');

  // ============================================================
  // CHRONICLE
  // ============================================================
  const chronicle = migration.createContentType('chronicle', {
    name: 'Chronicle',
    description: 'A story entry — real play or curated fiction set in Aevyndal',
    displayField: 'title',
  });

  chronicle.createField('title').name('Title').type('Symbol').required(true);
  chronicle.createField('summary').name('Summary').type('Text').required(true);
  chronicle.createField('date').name('Date').type('Date').required(true);
  chronicle.createField('age').name('Age').type('Link').linkType('Entry')
    .validations([{ linkContentType: ['age'] }]);
  chronicle.createField('region').name('Region').type('Symbol');
  chronicle.createField('peoplesFeatured').name('Peoples Featured').type('Array')
    .items({ type: 'Link', linkType: 'Entry', validations: [{ linkContentType: ['people'] }] });
  chronicle.createField('campaignLink').name('Campaign Link').type('Symbol');
  chronicle.createField('featured').name('Featured').type('Boolean');

  // ============================================================
  // CAMPAIGN
  // ============================================================
  const campaign = migration.createContentType('campaign', {
    name: 'Campaign',
    description: 'An actual play campaign at Grimwell Studio',
    displayField: 'title',
  });

  campaign.createField('title').name('Title').type('Symbol').required(true);
  campaign.createField('system').name('System').type('Symbol').required(true);
  campaign.createField('status').name('Status').type('Symbol')
    .validations([{ in: ['Active', 'Hiatus', 'Completed', 'Upcoming'] }]);
  campaign.createField('age').name('Age').type('Link').linkType('Entry')
    .validations([{ linkContentType: ['age'] }]);
  campaign.createField('description').name('Description').type('Text');
  campaign.createField('cast').name('Cast').type('Array').items({ type: 'Symbol' });
  campaign.createField('schedule').name('Schedule').type('Symbol');
  campaign.createField('vodLink').name('VOD Link').type('Symbol');
  campaign.createField('coverImage').name('Cover Image').type('Link').linkType('Asset');
  campaign.createField('featured').name('Featured').type('Boolean');

}
