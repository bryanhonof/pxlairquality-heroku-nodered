CREATE TABLE particle_sensor (
    id           SERIAL PRIMARY KEY,
    posting_time TIMESTAMP,
    PM1_0        SMALLINT,
    PM2_5        SMALLINT,
    PM10         SMALLINT
);

CREATE TABLE gps (
    id           SERIAL PRIMARY KEY,
    posting_time TIMESTAMP,
    lat          DOUBE PRECISION,
    long         DOUBE PRECISION,
);

CREATE TABLE motion (
    id           SERIAL PRIMARY KEY,
    posting_time TIMESTAMP,
    motion       BOOLEAN
);

CREATE TABLE air_quality (
    id           SERIAL PRIMARY KEY,
    posting_time TIMESTAMP,
    quality      SMALLINT   
);

CREATE TABLE light (
    id           SERIAL PRIMARY KEY,
    posting_time TIMESTAMP,
    lux          DOUBLE PRECISION 
);

CREATE TABLE loudness (
    id           SERIAL PRIMARY KEY,
    posting_time TIMESTAMP,
    dB           SMALLINT
);

CREATE TABLE humidity (
    id           SERIAL PRIMARY KEY,
    posting_time TIMESTAMP,
    quality      DECIMAL
);

CREATE TABLE pressure (
    id           SERIAL PRIMARY KEY,
    posting_time TIMESTAMP,
    pressure     SMALLINT   
);

CREATE TABLE temperature (
    id           SERIAL PRIMARY KEY,
    posting_time TIMESTAMP,
    temperature  SMALLINT   
);

CREATE TABLE counter (
    id           SERIAL PRIMARY KEY,
    posting_time TIMESTAMP,
    counter      INT 
);
