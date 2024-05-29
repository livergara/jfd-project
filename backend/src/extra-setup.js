const Assignment = require("./models/Assignment");
const Project = require("./models/Project");
const Resource = require("./models/Resource");

function applyExtraSetup(sequelize) {
	const { Project, Resource, Assignment } = sequelize.models;

	Resource.belongsToMany(Project, {through: Assignment});
	Project.belongsToMany(Resource, {through: Assignment});
}

module.exports = { applyExtraSetup };