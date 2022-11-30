import {formatDuration} from "date-fns";

function convertToMinutes(timeInSeconds:number) {

    return (Math.floor(timeInSeconds / 60)) + " mins";
}

export {convertToMinutes} 