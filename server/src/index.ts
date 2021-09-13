import fastify from "fastify";
import { Sequelize, Model, DataTypes } from "sequelize";
import fastifyCors from "fastify-cors";
const server = fastify({ logger: true })
server.register(fastifyCors)
// @ts-ignore
const sequelize = new Sequelize(('mariadb://rsyslog:password@192.168.0.186:3306/Syslog'))


const SysEvent = sequelize.define('SysEvent', {
    id: {
        type: DataTypes.NUMBER,
        primaryKey: true
    },
    // Model attributes are defined here
    current_datetime: {
        type: DataTypes.STRING,
    },
    system_total_memory: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    cpu_core_number: {
        type: DataTypes.STRING
    },
    cpu_clock: {
        type: DataTypes.STRING
    },
    root_free_space: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'SysEvents',
    timestamps: false
});

const start = async () => {
    try {
        await server.listen(3000)

    } catch (err) {
        server.log.error(err)
        process.exit(1)
    }
}

server.get('/', async (res, reply) => {
    return "hello World"
})
server.get('/system-logs', async (res, reply) => {
    return await SysEvent.findAll({
        order: [
            ['current_datetime', 'DESC'],
        ],
    })
})
start()