// Create new database "notar-e-anotar"
db = db.getSiblingDB('notar-e-anotar');

// routine_plans collection configs
db.createCollection("routine_plans");

// weekly_routines collection configs
db.createCollection("weekly_routines");

// routine_days collection configs
db.createCollection("routine_days");

// subjects collection configs    
db.createCollection("subjects");

// tasks collection configs
db.createCollection("tasks");