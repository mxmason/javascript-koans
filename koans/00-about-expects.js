describe('About Expects', function () {
	/**
	 * In testing, an expectation or expect is a piece of code
	 * that asserts how a program should behave. J
	 * The `expect` function here is called with a value, and from there
	 * we chain methods that explain what we want that value to be.
	 *
	 * For example: can use the methods `.toBeTruthy()` and `.toBeFalsy()` to test if something is, well, truthy or falsy.
	 */
	it('should expect predictable truthiness and falsiness for boolean values', function () {
		expect(true).toBeTruthy();
		expect(false).toBeFalsy();

		/**
		 * This test is failing.
		 */
		 it('should expect predictable truthiness and falsiness for boolean values', function() {

		 });
	});

	// To understand reality, we must compare our expectations against reality.
	it('should expect equality', function () {
		var expectedValue = 2;
		var actualValue = 1 + 1;

		expect(actualValue === expectedValue).toBeTruthy();
	});

	// Some ways of asserting equality are better than others!
	it('should assert equality a better way', function () {
		var expectedValue = [2];
		var actualValue = [2];

		// toEqual() compares using common sense equality.
		expect(actualValue).toEqual(expectedValue);
	});

	// Sometimes you need to be precise about what you "type."
	it('should assert equality with ===', function () {
		var expectedValue = '2';
		var actualValue = (1 + 1).toString();

		// toBe() will always use === to compare.
		expect(actualValue).toBe(expectedValue);
	});
});

describe('About JavaScript', function () {
	it('considers numbers to be equal to their string representation', () => {
		expect(1 == '1').toBeTruthy();
		expect(1 != '1').toBeFalsy();
	});

	it('knows that numbers and strings are not exactly the same', () => {
		expect(1 === '1').toBeFalsy();
		expect(1 !== '1').toBeTruthy();
	});

	it('joins parts as string when using the plus operator', () => {
		expect(1 + 'a').toEqual('1a');
	});

	it('operates integers before joining the string', () => {
		expect(1 + 1 + '2').toEqual('22');
	});

	it('knows the type of the variable', () => {
		const x = 1;

		expect(typeof x).toEqual(FILL_ME_IN);
	});
});
