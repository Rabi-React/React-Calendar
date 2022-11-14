import React,{useState} from "react";
import CalendarDays from "./CalendarDays";
import './Calendar.css';

export default function Calendar(props){
    const weekDays = ['Su','Mo','Tu','We','Th','Fr','Sa'];
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

    let propsDate = props.date.split("/");
    let [propsYear, propsMonth, propsDay] = propsDate;

    const [currentDay] = useState(new Date(`${propsYear},${propsMonth},${propsDay}`));
    debugger;

    return <>
        <div className="calendar">
        <div className="calendar-header">
          <h2>{months[currentDay.getMonth()]} {currentDay.getFullYear()}</h2>
        </div>
        <div className="calendar-body">
          <div className="table-header">
            {
              weekDays.map((weekday) => {
                return <div className="weekday"><p>{weekday}</p></div>
              })
            }
          </div>
          <CalendarDays day={currentDay} />
        </div>
      </div>
    </>
}