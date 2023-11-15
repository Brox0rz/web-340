/*
============================================
; Title:  team-manager.js
; Author: Brock Hemsouvanh
; Original Author: Professor Richard Krasso
; Date:   11/05/2023
; Description: Create array of teams and functions to call them for a sports app.
;===========================================
*/ 

// Import the Team class from the team module
const Team = require('./team');

let teams = [
    new Team('Alabama', 'Crimson Tide', 54),
    new Team('Alaska', 'Boor Tide', 52),
    new Team('Illinois', 'Corn Hide', 26),
    new Team('California', 'Golden Pride', 35),
    new Team('Oregon', 'Trail Died', 45),
]

// retrieve all team objects
function getTeams() {
    return teams;
}

// Make the getTeams function available to other modules
module.exports.getTeams = getTeams;

// Function to retrieve a single team object by its name
function getTeam(name) {
    return teams.find(team => team.name === name); // Returns the first team object matching the given name
}

// Make the getTeam function available to other modules
module.exports.getTeam = getTeam;

// Function to return a formatted string for a team's details
function displayTeam(team) {
    // Returns a string template with the team's properties
    return `Name: ${team.name}\nMascot: ${team.mascot}\nPlayer Count: ${team.playerCount}`;
}

// Make the displayTeam function available to other modules
module.exports.displayTeam = displayTeam;