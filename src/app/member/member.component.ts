import { Component, OnInit } from '@angular/core';
import {IdentityDocumentType, Member, MemberRequest} from "./interface/member";
import {MemberService} from "./service/member.service";
declare var $: any;
@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit{
  members: Member[] = [];

  newMember: MemberRequest = {
    name: '',
    familyName: '',
    accessionDate: new Date(),
    nationality: '',
    identityDocumentType: IdentityDocumentType.CIN,
    identityNumber: '',
  };
  constructor(private memberService: MemberService) {}


  ngOnInit() {
    this.loadMembers();

    $(() => {
      $('.js-check-all').on('click', () => {
        if ($(this).prop('checked')) {
          $('th input[type="checkbox"]').each(() => {
            $(this).prop('checked', true);
          });
        } else {
          $('th input[type="checkbox"]').each(() => {
            $(this).prop('checked', false);
          });
        }
      });
    });
  }
  loadMembers() {
    this.memberService.getMembers().subscribe(
      (data) => {
        this.members = data;
      },
      (error) => {
        console.error('Error fetching members:', error);
      }
    );
  }
  addMember() {
    this.memberService.addMember(this.newMember).subscribe(
      (response) => {
        console.log('Member added successfully:', response);
        this.loadMembers();
      },
      (error) => {
        console.error('Error adding member:', error);
      });

    this.newMember = {
      name: '',
      familyName: '',
      accessionDate: new Date(),
      nationality: '',
      identityDocumentType: IdentityDocumentType.CIN,
      identityNumber: '',
    };
  }

  protected readonly IdentityDocumentType = IdentityDocumentType;
}
