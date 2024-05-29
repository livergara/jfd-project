module.exports = (sequelize, DataTypes) => {
    const Assignment = sequelize.define('Assignment', {
        resourceId: DataTypes.INTEGER,
        projectId: DataTypes.INTEGER,
    })

    return Assignment
}