 /*
============================================
; Title:  index.js
; Author: Brock Hemsouvanh
; Original Author: Professor Richard Krasso
; Date:   11/05/2023
; Description: Importing modules containing arrays and functions for a sports app.
;===========================================
*/ 

const TeamManager = require('./team-manager');

// Display all teams
const teams = TeamManager.getTeams();
console.log('-- DISPLAYING TEAMS --');
teams.forEach(team => {
    console.log(TeamManager.displayTeam(team) + '\n');
});

// Display a single team
const alabama = TeamManager.getTeam('Alabama');
console.log('-- DISPLAYING A SINGLE TEAM --');
console.log(TeamManager.displayTeam(alabama) + '\n');

// Display a single team - Alaska
const alaska = TeamManager.getTeam('Alaska');
console.log('-- DISPLAYING A SINGLE TEAM --');
console.log(TeamManager.displayTeam(alaska) + '\n');

// Display a single team - Illinois
const illinois = TeamManager.getTeam('Illinois');
console.log('-- DISPLAYING A SINGLE TEAM --');
console.log(TeamManager.displayTeam(illinois) + '\n');

// Display a single team - California
const california = TeamManager.getTeam('California');
console.log('-- DISPLAYING A SINGLE TEAM --');
console.log(TeamManager.displayTeam(california) + '\n');

// Display a single team - Oregon
const oregon = TeamManager.getTeam('Oregon');
console.log('-- DISPLAYING A SINGLE TEAM --');
console.log(TeamManager.displayTeam(oregon) + '\n');
