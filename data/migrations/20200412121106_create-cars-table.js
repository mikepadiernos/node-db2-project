exports.up = function(knex) {
	return knex.schema.createTable("cars", tbl=>{
		tbl.increments('id');
		tbl.integer( "vin").unique().notNullable();
		tbl.string("make").notNullable();
		tbl.string("model").notNullable();
		tbl.integer("mileage")
	})
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists("cars")
};