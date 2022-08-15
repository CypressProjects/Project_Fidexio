/// <reference types='Cypress' />

class calendarPage {
  day;
  monthPicker(expectedMonth) {
    let actualMonth;
     cy.get(".ui-datepicker-month").then(($data)=>{
      actualMonth = $data.text();
    })

    let list = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",];

    cy.wait(200).then(()=>{
      for(let i = 0; i < list.length; i++){
        if(list[i] == actualMonth){
            actualMonth = i;
        }
        }
      cy.log("actualMonth: " + actualMonth);
      for(let i = 0; i < list.length; i++){
        if(list[i] == expectedMonth) expectedMonth = i;
      }
      cy.log("expectedMonth: " + expectedMonth);

      let difference = expectedMonth - actualMonth;
      while(difference > 0){
        cy.get('.ui-datepicker-next').click().wait(500);
        difference--;
      }
      while(difference < 0){
        cy.get('.ui-datepicker-prev').click().wait(500);
        difference++;
      }
      if(expectedMonth!=actualMonth){
        this.monthPicker(expectedMonth);
      }
    })
  }
  dayPicker(day){
    cy.get(".ui-datepicker-calendar>tbody").within(()=>{
      cy.contains('a',day).click();
      this.day = day;
    })
  }
  dayTableLocator = '.o_calendar_button_day';
  setMeetingInDayTable(hourOrWholeDay){
    cy.get(this.dayTableLocator).click().wait(1000);
    cy.get('.breadcrumb > .active').then(($data)=>{
      expect($data.text()).to.contain(this.day);
    })

    if(hourOrWholeDay == "All day"){
      cy.get('.fc-row > .fc-bg > table > tbody > tr > .fc-day').click();
    }else{
      cy.get("tr[data-time='" + hourOrWholeDay + ":00']").click();
      cy.get(".o_input[name='name']").type("Cypress Automation");
      cy.wait(1000).get(".modal-footer>:first-child").click();
    }
  }
  eraseMeeting(month,day,hour){
    this.monthPicker(month);
    this.dayPicker(day);
    //select day mode
    cy.get(this.dayTableLocator).click().wait(1000);
    cy.get(".fc-event-container:not(.fc-helper-container)").within(($data)=>{
      if($data.text().includes(hour)){
        cy.get('a').click();
      }
    })
    // delete button
    cy.get(".modal-footer>:nth-child(2)").click();
    cy.get(".modal-footer>button").eq(3).click();

  }
}
export default calendarPage;
