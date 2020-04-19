exports.up = function(knex) {
	return knex.schema.createTable("cars", tbl=>{
		tbl.increments('id');
		tbl.string( 'vin', 17)
			.notNullable()
			.unique()
			.index();
		tbl.string('make', 255)
			.notNullable();
		tbl.string('model', 255)
			.notNullable();
		tbl.integer('mileage', 255)
			.notNullable();
		tbl.string('transmission', 255)
			.notNullable();
		tbl.string('status', 255);
	})
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists("cars")
};