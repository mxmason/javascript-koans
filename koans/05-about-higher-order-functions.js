describe('About Higher Order Functions', function () {
	it('should use filter to return array items that meet a criteria', function () {
		var numbers = [1, 2, 3];
		var odd = numbers.filter(function (x) {
			return x % 2 !== 0;
		});

		expect(odd).toEqual(FILL_ME_IN);
		expect(odd.length).toBe(FILL_ME_IN);
		expect(numbers.length).toBe(FILL_ME_IN);
	});

	it("should use Array.map to transform each element", function () {
		var numbers = [1, 2, 3];
		var numbersPlus1 = numbers.map(function (x) {
			return x + 1;
		});

		expect(numbersPlus1).toEqual(FILL_ME_IN);
		expect(numbers).toEqual(FILL_ME_IN);
	});

	it("should use 'reduce' to update the same result on each iteration", function () {
		var numbers = [1, 2, 3];
		var reduction = numbers.reduce(function (
			/* result from last call */ memo,
			/* current */ x
		) {
			return memo + x;
		},
		/* initial */ 0);

		expect(reduction).toBe(FILL_ME_IN);
		expect(numbers).toEqual(FILL_ME_IN);
	});

	it("should use 'forEach' for simple iteration", function () {
		var numbers = [1, 2, 3];
		var msg = '';
		var isEven = function (item) {
			msg += item % 2 === 0;
		};

		numbers.forEach(isEven);

		expect(msg).toEqual(FILL_ME_IN);
		expect(numbers).toEqual(FILL_ME_IN);
	});

	it("should use Array.every to test whether all items pass condition", function () {
		var onlyEven = [2, 4, 6];
		var mixedBag = [2, 4, 5, 6];

		var isEven = function (x) {
			return x % 2 === 0;
		};

		expect(onlyEven.every(isEven)).toBe(FILL_ME_IN);
		expect(mixedBag.every(isEven)).toBe(FILL_ME_IN);
	});

	it("should use Array.some to test if any items passes condition", function () {
		var onlyEven = [2, 4, 6];
		var mixedBag = [2, 4, 5, 6];

		var isEven = function (x) {
			return x % 2 === 0;
		};

		expect((onlyEven).some(isEven)).toBe(FILL_ME_IN);
		expect((mixedBag).some(isEven)).toBe(FILL_ME_IN);
	});

	it('should use Array.flat to make nested arrays easy to work with', function () {
		expect(
			([
				[1, 2],
				[3, 4],
			]).flar()
		).toEqual(FILL_ME_IN);
	});

});
