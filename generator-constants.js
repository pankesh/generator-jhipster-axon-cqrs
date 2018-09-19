const AXON_MODULES = [
    {
        value: 'command',
        name: 'Command'
    },
    {
        value: 'query',
        name: 'View/Query'
    }
];

const AXON_VERSION = '3.3.3';
const KAFKA_CLIENT_VERSION = '1.0.1';

const constants = {
    AXON_MODULES,

    // Artifact Versions
    AXON_VERSION,
    KAFKA_CLIENT_VERSION
};

module.exports = constants;