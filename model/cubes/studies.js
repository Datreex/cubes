const FilterDefaults = {
    phase: [// "Early Phase 1",
        "Phase 1", // "Phase 1/Phase 2",
        "Phase 2", // "Phase 2/Phase 3",
        "Phase 3" // "Phase 4",
    ],
    overall_status: [// "Available",
        "Not yet recruiting", "Recruiting"],
    start_date: new Date("1-1-" + (new Date().getFullYear() - 3)) // studyEnd: new Date(),

};
cube(`studies`, {
    sql_table: `ctgov.studies`,
    joins: {
        countries: {
            sql: `${CUBE}.nct_id = ${countries}.nct_id`,
            relationship: `one_to_many`,
            
        },
        links: {
            sql: `${CUBE}.nct_id = ${links}.nct_id`,
            relationship: `one_to_many`
        },
        facility_contacts: {
            sql: `${CUBE}.nct_id = ${facility_contacts}.nct_id`,
            relationship: `one_to_many`
        },
        facilities: {
            sql: `${CUBE}.nct_id = ${facilities}.nct_id`,
            relationship: `one_to_many`
        },
        eligibilities: {
            sql: `${CUBE}.nct_id = ${eligibilities}.nct_id`,
            relationship: `one_to_many`
        },
        detailed_descriptions: {
            sql: `${CUBE}.nct_id = ${detailed_descriptions}.nct_id`,
            relationship: `one_to_many`
        },
        brief_summaries: {
            sql: `${CUBE}.nct_id = ${brief_summaries}.description`,
            relationship: `one_to_many`
        },
        browse_conditions: {
            sql: `${CUBE}.nct_id = ${browse_conditions}.nct_id`,
            relationship: `one_to_many`
        },
        browse_interventions: {
            sql: `${CUBE}.nct_id = ${browse_interventions}.nct_id`,
            relationship: `one_to_many`
        }
    },
    dimensions: {
        nct_id: {
            sql: `nct_id`,
            type: `string`,
            primaryKey: true,
            shown:true
        },
        start_month_year: {
            sql: `start_month_year`,
            type: `string`
        },
        start_date_type: {
            sql: `start_date_type`,
            type: `string`
        },
        target_duration: {
            sql: `target_duration`,
            type: `string`
        },
        study_type: {
            sql: `study_type`,
            type: `string`
        },
        acronym: {
            sql: `acronym`,
            type: `string`
        },
        baseline_population: {
            sql: `baseline_population`,
            type: `string`
        },
        brief_title: {
            sql: `brief_title`,
            type: `string`
        },
        official_title: {
            sql: `official_title`,
            type: `string`
        },
        overall_status: {
            sql: `overall_status`,
            type: `string`
        },
        last_known_status: {
            sql: `last_known_status`,
            type: `string`
        },
        phase: {
            sql: `phase`,
            type: `string`
        },
        enrollment_type: {
            sql: `enrollment_type`,
            type: `string`
        },
        created_at: {
            sql: `created_at`,
            type: `time`
        },
        last_update_submitted_date: {
            sql: `last_update_submitted_date`,
            type: `time`
        },
        last_update_submitted_qc_date: {
            sql: `last_update_submitted_qc_date`,
            type: `time`
        },
        last_update_posted_date: {
            sql: `last_update_posted_date`,
            type: `time`
        },
        updated_at: {
            sql: `updated_at`,
            type: `time`
        },
        study_first_posted_date: {
            sql: `study_first_posted_date`,
            type: `time`
        },
        start_date: {
            sql: `start_date`,
            type: `time`
        },
        completion_date: {
            sql: `completion_date`,
            type: `time`
        },
        primary_completion_date: {
            sql: `primary_completion_date`,
            type: `time`
        }
    },
    measures: {
        count: {
            type: `count`
        }
    },
    segments: {
        relevantStudies: {
            sql: `${CUBE}.phase in ('${FilterDefaults.phase.join("','")}') and ${CUBE}.study_type = 'Interventional' and  ${CUBE}.overall_status in ('${FilterDefaults.overall_status.join("','")}')  and ${CUBE}.start_date >= '${FilterDefaults.start_date.toLocaleDateString('en-GB')}' and ${CUBE}.completion_date >='${new Date().toLocaleDateString('en-GB')}'   `
        }
    },
    // pre_aggregations: {// main: {
    //     //     dimensions: [studies.official_title],
    //     //     segments: [studies.relevantStudies]
    //     // },
    //     // relevantStudiesRollup: {
    //     //     segments: [CUBE.relevantStudies],
    //     //     dimensions: [CUBE.nct_id, CUBE.brief_title, CUBE.start_date, CUBE.phase, CUBE.overall_status]
    //     // },
    //     // main:
    //     //   {
    //     //   type: `rollup_join`,
    //     //   measures: [CUBE.count],
    //     //   dimensions: [CUBE.nct_id,browse_conditions.downcase_mesh_term],
    //     //   time_dimension: CUBE.created_at,
    //     //   granularity: `day`,
    //     //   rollups: [browse_conditions.mainRollup, CUBE.relevantStudiesRollup],
    //     // },
    //     // main_table: {
    //     //   dimensions: [studies.nct_id,  studies.phase,  facilities.name,  countries.name],
    //     //   segments: [studies.relevantStudies],
    //     //   timeDimension: studies.start_date,
    //     //   granularity: `day`
    //     // }
    // } // Pre-aggregation definitions go here.
    // // Learn more in the documentation: https://cube.dev/docs/caching/pre-aggregations/getting-started
    // ,
    // preAggregations: {
    //   test: {
    //     dimensions: [studies.brief_title]
    //   },
    //   main: {
    //     dimensions: [studies.phase]
    //   }
    // }
});