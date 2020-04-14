import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  TeamMembersSummary;
  TeamMembers;
  constructor() { }

  getTeamMembersSummary(){
    this.TeamMembersSummary = [
      { Region: "East", TeamMembersCount: 20, TemporarilyUnavailableMembers: 4 },
      { Region: "West", TeamMembersCount: 15, TemporarilyUnavailableMembers: 8 },
      { Region: "South", TeamMembersCount: 17, TemporarilyUnavailableMembers: 1 },
      { Region: "North", TeamMembersCount: 15, TemporarilyUnavailableMembers: 6 }
    ];
    return this.TeamMembersSummary;
  }

  getTeamMembers(){
    this.TeamMembers = [
      {
        Region: "East", Members: [
          { ID: 1, Name: "Ford", Status: "Available" },
          { ID: 2, Name: "Miller", Status: "Available" },
          { ID: 3, Name: "Jones", Status: "Busy" },
          { ID: 4, Name: "James", Status: "Busy" }
        ]
      },
      {
        Region: "West", Members: [
          { ID: 5, Name: "Anna", Status: "Available" },
          { ID: 6, Name: "Arun", Status: "Available" },
          { ID: 7, Name: "Varun", Status: "Busy" },
          { ID: 8, Name: "Jasmine", Status: "Busy" }
        ]
      },
      {
        Region: "South", Members: [
          { ID: 9, Name: "Krishna", Status: "Available" },
          { ID: 10, Name: "Mohan", Status: "Available" },
          { ID: 11, Name: "Raju", Status: "Busy" },
          { ID: 12, Name: "Farooq", Status: "Busy" }
        ]
      },
      {
        Region: "North", Members: [
          { ID: 13, Name: "Jacob", Status: "Available" },
          { ID: 14, Name: "Smith", Status: "Available" },
          { ID: 15, Name: "Jones", Status: "Busy" },
          { ID: 16, Name: "James", Status: "Busy" }
        ]
      }
    ]
    return this.TeamMembers;
  }
}
