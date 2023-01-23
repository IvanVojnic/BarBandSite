const {Sequelize} = require("sequelize")

const sequelize = new Sequelize('barbandr_barsite', 'root', '', {
    dialect: 'mysql',
    host: 'localhost',
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle:10000
    }
});

sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });


sequelize.sync({force:false}).then(()=>{
    console.log("Tables have been created");
}).catch((err) => {
    console.log(err);
});

module.exports = { sequelize }
