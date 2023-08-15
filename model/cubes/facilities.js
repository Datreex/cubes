cube(`facilities`, {
  sql_table: `ctgov.facilities`,
  
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
    
    status: {
      sql: `status`,
      type: `string`
    },
    
    name: {
      sql: `name`,
      type: `string`
    },
    
    city: {
      sql: `city`,
      type: `string`
    },
    
    state: {
      sql: `state`,
      type: `string`
    },
    
    zip: {
      sql: `zip`,
      type: `string`
    },
    
    country: {
      sql: `country`,
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
