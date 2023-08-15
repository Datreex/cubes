cube(`browse_interventions`, {
    sql_table: `ctgov.browse_interventions`,

    joins: {},

    dimensions: {
        id: {
            sql: `id`,
            type: `number`,
            primary_key: true,
        },

        nct_id: {
            sql: `nct_id`,
            type: `string`
        },

        mesh_term: {
            sql: `mesh_term`,
            type: `string`
        },

        downcase_mesh_term: {
            sql: `downcase_mesh_term`,
            type: `string`
        },

        mesh_type: {
            sql: `mesh_type`,
            type: `string`
        }
    },

    measures: {
        count: {
            type: `count`
        }
    },

    pre_aggregations: {
        // Pre-aggregation definitions go here.
        // Learn more in the documentation: https://cube.dev/docs/caching/pre-aggregations/getting-started
        // main:{
        //   dimensions:[CUBE.downcase_mesh_term,CUBE.nct_id]
        // }
    }
});
