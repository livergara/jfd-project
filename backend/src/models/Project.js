module.exports = (sequelize, DataTypes) => {
    const Project = sequelize.define('Project', {
        name: DataTypes.STRING,
        projectCode: DataTypes.STRING,
        description: DataTypes.TEXT,
        manager: DataTypes.STRING,
        managerContacts: DataTypes.STRING,
        startDate: DataTypes.DATE,
        endDate: DataTypes.DATE,
        members: DataTypes.STRING,
    })

    Project.associate = function (models) {
    }

    return Project
}