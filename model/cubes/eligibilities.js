cube(`eligibilities`, {
  sql_table: `ctgov.eligibilities`,
  
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
    
    sampling_method: {
      sql: `sampling_method`,
      type: `string`
    },
    
    gender: {
      sql: `gender`,
      type: `string`
    },
    
    minimum_age: {
      sql: `minimum_age`,
      type: `string`
    },
    
    maximum_age: {
      sql: `maximum_age`,
      type: `string`
    },
    
    healthy_volunteers: {
      sql: `healthy_volunteers`,
      type: `string`
    },
    
    population: {
      sql: `population`,
      type: `string`
    },
    
    criteria: {
      sql: `criteria`,
      type: `string`
    },
    
    gender_description: {
      sql: `gender_description`,
      type: `string`
    },
    
    gender_based: {
      sql: `gender_based`,
      type: `string`
    },
    
    adult: {
      sql: `adult`,
      type: `string`
    },
    
    child: {
      sql: `child`,
      type: `string`
    },
    
    older_adult: {
      sql: `older_adult`,
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
