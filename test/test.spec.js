describe("A test suite", function() {
  beforeEach(function() {
  });
  afterEach(function() {
  });
 
/*it('should fail (using chai expect)', function() {    
    expect(false).to.be.true;
    //expect(foo).to.have.length(3);
  //expect(tea).to.have.property('flavors')
    //.with.length(3);
  });*/

  it('should not fail (using chai expect)', function() {  	
    expect(true).to.be.true;
    //expect(foo).to.have.length(3);
	//expect(tea).to.have.property('flavors')
  	//.with.length(3);
  });

  it('should not fail (using chai assert)',function() {
  	assert.typeOf('foo','string');
  	assert.lengthOf('foo',3);
  	assert.equal('foo','foo');
  })

  it('shouldn\'t fail (using chai should)', function() {
  	var foo = 'foo';
  	foo.should.be.a('string');
  	//foo.should.equal('bar');
	//foo.should.have.length(3);
	//tea.should.have.property('flavors')
  	//	.with.length(3);
  })

});