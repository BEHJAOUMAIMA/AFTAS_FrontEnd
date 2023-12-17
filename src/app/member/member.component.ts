import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit{
  ngOnInit() {
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
}
