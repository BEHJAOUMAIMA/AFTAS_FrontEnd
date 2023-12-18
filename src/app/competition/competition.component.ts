import {Component, OnInit} from '@angular/core';
import {Competition, CompetitionRequest} from "./interface/competition";
import {CompetitionService} from "./service/competition.service";
import {MemberRequest} from "../member/interface/member";

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css']
})
export class CompetitionComponent implements OnInit{
  competitions: Competition[] = [];


  newCompetition: CompetitionRequest = {
    date: '',
    startTime: '',
    endTime: '',
    numberOfParticipants: 1,
    Location: '',
    amount: 0.0,
  };
  constructor(private competitionService: CompetitionService) {}
  ngOnInit() {
    this.loadCompetitions();
  }

  loadCompetitions() {
    this.competitionService.getCompetitions().subscribe(
      (data) => {
        this.competitions = data;
      },
      (error) => {
        console.error('Error fetching competitions:', error);
      }
    );
  }

  addCompetition() {
    this.competitionService.addCompetition(this.newCompetition).subscribe(
      (response) => {
        console.log('Competition added successfully:', response);
        this.loadCompetitions();
      },
      (error) => {
        console.error('Error adding Competition:', error);
      });

    this.newCompetition = {
      date: '',
      startTime: '',
      endTime: '',
      numberOfParticipants: 1,
      Location: '',
      amount: 0.0,
    };
  }

}
