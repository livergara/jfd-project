
module.exports = (sequelize, DataTypes) => {
    const Assignment = sequelize.define(
        'Assignment',
        { 
            timestamps: false },
    );
 
    return Assignment
}

