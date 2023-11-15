/*
============================================
; Title:  team.js
; Author: Brock Hemsouvanh
; Original Author: Professor Richard Krasso
; Date:   11/05/2023
; Description: Create module for Team object export.
;===========================================
*/ 
class Team {
    constructor(name, mascot, playerCount) {
        this.name = name;
        this.mascot = mascot;
        this.playerCount = playerCount;
    }
}

module.exports = Team;