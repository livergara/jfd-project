module.exports = (sequelize, DataTypes) => {
    const Resource = sequelize.define('Resource', {
        fio: DataTypes.STRING,
        personnelNumber: DataTypes.STRING,
        email: DataTypes.STRING,
        position: DataTypes.STRING,
        role: DataTypes.STRING,
        busyness: DataTypes.STRING,
        resourceOwner: DataTypes.STRING,
        projects: DataTypes.STRING,
    })

    return Resource
}