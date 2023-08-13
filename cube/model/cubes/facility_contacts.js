cube(`facility_contacts`, {
  sql_table: `ctgov.facility_contacts`,
  
  joins: {
    facilities: {
      sql: `${CUBE}.facility_id = ${facilities}.id`,
      relationship: `many_to_one`
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primary_key: true
    },
    facility_id:{
      sql: 'facility_id',
      type: 'number',
      
    },
    nct_id: {
      sql: `nct_id`,
      type: `string`
    },
    
    contact_type: {
      sql: `contact_type`,
      type: `string`
    },
    
    name: {
      sql: `name`,
      type: `string`
    },
    
    email: {
      sql: `email`,
      type: `string`
    },
    
    phone: {
      sql: `phone`,
      type: `string`
    },
    
    phone_extension: {
      sql: `phone_extension`,
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
