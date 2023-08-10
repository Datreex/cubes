cube(`countries`, {
  sql_table: `ctgov.countries`,
  
  joins: {
    
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primary_key: true
    },
    
    nct_id: {
      sql: `nct_id`,
      type: `string`
    },
    
    name: {
      sql: `name`,
      type: `string`
    },
    
    removed: {
      sql: `removed`,
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
  }
});
