module.exports = (sequelize, DataTypes) => {
    const Project = sequelize.define('Project', {
        name: DataTypes.STRING,
        projectCode: DataTypes.STRING,
        description: DataTypes.TEXT,
        manager: DataTypes.STRING,
        managerContacts: DataTypes.STRING,
        startDate: DataTypes.DATEONLY,
        endDate: DataTypes.DATEONLY,
        members: DataTypes.STRING,
    })

    return Project
}