/*
- The critical information for each car is the VIN, make, model, and mileage.
- They also track transmission type and status of the title (clean, salvage, etc.),
 but this information is not always immediately known.
*/
exports.up = async function(knex) {
  await knex.schema.createTable("cars", tbl => {
    tbl.increments("id");
    tbl
      .text("VIN", "VARCHAR")
      .notNullable()
      .unique();
    tbl.text("make", 128).notNullable();
    tbl.text("model", 128).notNullable();
    tbl.float("mileage").notNullable();
    tbl.boolean("clean").defaultTo(false);
    tbl.boolean("salvage").defaultTo(false);
    tbl.timestamps();
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("cars");
};
