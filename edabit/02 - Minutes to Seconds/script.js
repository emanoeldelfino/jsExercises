function convert(minutes) {
    return minutes * 60;
};

mins = Number(prompt('Time in minutes: '))
secs = convert(mins);
document.write(`${mins} minute(s) is ${secs} second(s).`)
