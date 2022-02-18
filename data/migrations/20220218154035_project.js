
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', (table) => {
        table.increments('project_id')
        table.string('project_name').notNullable()
        table.text('project_description')
        table.boolean('project_completed').defaultTo(false)
    })
    .createTable('resources', (table) => {
        table.increments('resource_id')
        table.string('resource_name').notNullable().unique()
        table.text('resource_description')
    })
    .createTable('tasks', (table) => {
        table.increments('task_id')
        table.text('task_description').notNullable()
        table.string('task_notes', 255)
        table.boolean('task_completed').defaultTo(false)
        table.integer('project_id')
            .unsigned()
            .notNullable()
            .references('project_id')
            .inTable('projects')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT')
    })
    .createTable('resource_assignment', (table) => {
        table.increments('resource_assign_id')
        table.integer('project_id')
            .unsigned()
            .notNullable()
            .references('project_id')
            .inTable('projects')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT')    
        table.integer('recource_id')
            .unsigned()
            .notNullable()
            .references('resource_id')
            .inTable('resources')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT')
        table.integer('task_id')
            .unsigned()
            .notNullable()
            .references('task_id')
            .inTable('taks')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT')
    })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('resource_assignment')
  .dropTableIfExists('task')
  .dropTableIfExists('resource')
  .dropTableIfExists('project')
};
